"use client";

import { useState, useSyncExternalStore } from "react";
import {
  DEFAULT_AD_CAMPAIGNS,
  getAdCampaignSnapshot,
  getServerAdCampaignSnapshot,
  saveAdCampaigns,
  subscribeToAdCampaigns,
} from "@/lib/adCampaigns";

export default function AdManager() {
  const snapshot = useSyncExternalStore(
    subscribeToAdCampaigns,
    getAdCampaignSnapshot,
    getServerAdCampaignSnapshot,
  );
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState("");
  const campaigns = draft ?? snapshot.campaigns;

  function updateCampaign(id, field, value) {
    setDraft((current) =>
      (current ?? snapshot.campaigns).map((campaign) =>
        campaign.id === id ? { ...campaign, [field]: value } : campaign,
      ),
    );
    setStatus("Unsaved changes");
  }

  function save() {
    try {
      saveAdCampaigns(campaigns);
      setStatus("Ad settings saved in this browser.");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? `Could not save ad settings: ${error.message}`
          : "Could not save ad settings.",
      );
    }
  }

  function reset() {
    try {
      saveAdCampaigns(DEFAULT_AD_CAMPAIGNS);
      setDraft(null);
      setStatus("Default demo ads restored.");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? `Could not restore defaults: ${error.message}`
          : "Could not restore defaults.",
      );
    }
  }

  return (
    <div className="ad-manager">
      <div className="ad-manager-notice">
        <b>Demo admin panel</b>
        <p>
          Changes are saved only in this browser and are not shared with other
          visitors. This panel has no admin login or ad-network connection.
        </p>
      </div>
      {snapshot.error && (
        <p className="form-error" role="alert">
          Could not load saved ads: {snapshot.error}
        </p>
      )}

      <div className="ad-manager-grid">
        {campaigns.map((campaign) => (
          <section
            className="card editor-card ad-manager-card"
            key={campaign.id}
          >
            <div>
              <span className="eyebrow">Demo campaign</span>
              <h2>{campaign.name}</h2>
            </div>
            <label>
              Advertiser name
              <input
                value={campaign.name}
                onChange={(event) =>
                  updateCampaign(campaign.id, "name", event.target.value)
                }
                maxLength={60}
                required
              />
            </label>
            <label>
              Banner mark
              <input
                value={campaign.mark}
                onChange={(event) =>
                  updateCampaign(campaign.id, "mark", event.target.value)
                }
                maxLength={3}
                required
              />
            </label>
            <label>
              Banner message
              <input
                value={campaign.message}
                onChange={(event) =>
                  updateCampaign(campaign.id, "message", event.target.value)
                }
                maxLength={120}
                required
              />
            </label>
            <label>
              Destination URL
              <input
                type="url"
                value={campaign.href}
                onChange={(event) =>
                  updateCampaign(campaign.id, "href", event.target.value)
                }
                required
              />
            </label>
            <label className="ad-manager-enabled">
              <input
                type="checkbox"
                checked={campaign.enabled}
                onChange={(event) =>
                  updateCampaign(campaign.id, "enabled", event.target.checked)
                }
              />
              Show this ad on its assigned placements
            </label>
          </section>
        ))}
      </div>

      <div className="ad-manager-actions">
        <button className="btn btn-primary" type="button" onClick={save}>
          Save changes
        </button>
        <button className="btn btn-ghost" type="button" onClick={reset}>
          Restore demo ads
        </button>
      </div>
      <p className="small-text" role="status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
