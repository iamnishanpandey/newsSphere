export const AD_CAMPAIGNS_STORAGE_KEY = "newssphere:ad-campaigns";
export const AD_CAMPAIGNS_UPDATED_EVENT = "newssphere:ad-campaigns-updated";

export const DEFAULT_AD_CAMPAIGNS = [
  {
    id: "esewa",
    name: "eSewa",
    mark: "e",
    message: "Digital payments for everyday life.",
    href: "https://esewa.com.np",
    enabled: true,
  },
  {
    id: "khalti",
    name: "Khalti",
    mark: "K",
    message: "A simple way to pay and recharge.",
    href: "https://khalti.com",
    enabled: true,
  },
];

const defaultSnapshot = {
  campaigns: DEFAULT_AD_CAMPAIGNS,
  error: null,
};
let lastRawValue;
let currentSnapshot = defaultSnapshot;

export function validateAdCampaigns(value) {
  if (!Array.isArray(value)) {
    throw new Error("Saved ad campaigns must be a list.");
  }

  return DEFAULT_AD_CAMPAIGNS.map((defaultCampaign) => {
    const campaign = value.find((item) => item?.id === defaultCampaign.id);
    if (
      !campaign ||
      typeof campaign.name !== "string" ||
      typeof campaign.mark !== "string" ||
      typeof campaign.message !== "string" ||
      typeof campaign.href !== "string" ||
      typeof campaign.enabled !== "boolean"
    ) {
      throw new Error(`The ${defaultCampaign.name} campaign has invalid fields.`);
    }

    if (
      !campaign.name.trim() ||
      !campaign.mark.trim() ||
      !campaign.message.trim()
    ) {
      throw new Error(`The ${defaultCampaign.name} campaign cannot be blank.`);
    }

    const href = new URL(campaign.href);
    if (href.protocol !== "https:" && href.protocol !== "http:") {
      throw new Error("Ad destinations must use HTTP or HTTPS.");
    }

    return {
      id: defaultCampaign.id,
      name: campaign.name.trim(),
      mark: campaign.mark.trim(),
      message: campaign.message.trim(),
      href: href.toString(),
      enabled: campaign.enabled,
    };
  });
}

export function subscribeToAdCampaigns(onChange) {
  window.addEventListener(AD_CAMPAIGNS_UPDATED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(AD_CAMPAIGNS_UPDATED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function getAdCampaignSnapshot() {
  let rawValue;
  try {
    rawValue = window.localStorage.getItem(AD_CAMPAIGNS_STORAGE_KEY);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Browser storage is unavailable.";
    if (currentSnapshot.error !== message) {
      currentSnapshot = { campaigns: DEFAULT_AD_CAMPAIGNS, error: message };
    }
    return currentSnapshot;
  }

  if (rawValue === lastRawValue) return currentSnapshot;
  lastRawValue = rawValue;

  try {
    currentSnapshot = rawValue
      ? { campaigns: validateAdCampaigns(JSON.parse(rawValue)), error: null }
      : defaultSnapshot;
  } catch (error) {
    currentSnapshot = {
      campaigns: DEFAULT_AD_CAMPAIGNS,
      error:
        error instanceof Error ? error.message : "Saved ad settings are invalid.",
    };
  }

  return currentSnapshot;
}

export function getServerAdCampaignSnapshot() {
  return defaultSnapshot;
}

export function saveAdCampaigns(value) {
  const campaigns = validateAdCampaigns(value);
  const rawValue = JSON.stringify(campaigns);
  window.localStorage.setItem(AD_CAMPAIGNS_STORAGE_KEY, rawValue);
  lastRawValue = rawValue;
  currentSnapshot = { campaigns, error: null };
  window.dispatchEvent(new Event(AD_CAMPAIGNS_UPDATED_EVENT));
  return campaigns;
}
