"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  DEFAULT_AD_CAMPAIGNS,
  getAdCampaignSnapshot,
  getServerAdCampaignSnapshot,
  subscribeToAdCampaigns,
} from "@/lib/adCampaigns";

export default function FreePlanAd({ campaign = "esewa" }) {
  const defaultAd =
    DEFAULT_AD_CAMPAIGNS.find((item) => item.id === campaign) ??
    DEFAULT_AD_CAMPAIGNS[0];
  const snapshot = useSyncExternalStore(
    subscribeToAdCampaigns,
    getAdCampaignSnapshot,
    getServerAdCampaignSnapshot,
  );
  const ad = snapshot.campaigns.find((item) => item.id === campaign) ?? defaultAd;

  if (!ad.enabled) return null;

  return (
    <aside
      className={`free-plan-ad container ad-${ad.id}`}
      aria-label={`Demo advertisement for ${ad.name}`}
    >
      <div className="ad-banner-mark" aria-hidden="true">
        {ad.mark}
      </div>
      <div className="ad-banner-copy">
        <span className="ad-label">Demo ad · Not affiliated</span>
        <strong>{ad.name}</strong>
        <p>{ad.message}</p>
      </div>
      <Link
        className="btn btn-primary"
        href={ad.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit {ad.name}
      </Link>
    </aside>
  );
}
