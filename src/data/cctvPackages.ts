export type CCTVPackage = {
  id: string;
  name: string;
  subtitle: string;
  cameras: string;
  resolution: string;
  recorder: string;
  storage: string;
  remoteViewing: boolean;
  mobileApp: boolean;
  nightVision: boolean;
  installation: string;
  cabling: string;
  support: string;
  featured?: boolean;
};

export const cctvPackages: CCTVPackage[] = [
  {
    id: "basic",
    name: "Basic Security",
    subtitle: "Homes & Small Offices",
    cameras: "4 Cameras",
    resolution: "2MP / 1080p",
    recorder: "4-Channel DVR / NVR",
    storage: "1 TB",
    remoteViewing: true,
    mobileApp: true,
    nightVision: true,
    installation: "Included",
    cabling: "Standard",
    support: "Standard",
  },
  {
    id: "smart",
    name: "Smart Security",
    subtitle: "Homes, Shops & Offices",
    cameras: "8 Cameras",
    resolution: "4MP",
    recorder: "8-Channel DVR / NVR",
    storage: "2 TB",
    remoteViewing: true,
    mobileApp: true,
    nightVision: true,
    installation: "Included",
    cabling: "Standard",
    support: "Priority",
    featured: true,
  },
  {
    id: "professional",
    name: "Professional Security",
    subtitle: "Commercial & Larger Sites",
    cameras: "16 Cameras",
    resolution: "4MP / 5MP",
    recorder: "16-Channel DVR / NVR",
    storage: "4 TB",
    remoteViewing: true,
    mobileApp: true,
    nightVision: true,
    installation: "Included",
    cabling: "Professional",
    support: "Priority",
  },
];

export const cctvPackageMap: Record<string, string> = {
  basic: "Basic Security",
  smart: "Smart Security",
  professional: "Professional Security",
  custom: "Custom CCTV Solution",
};
