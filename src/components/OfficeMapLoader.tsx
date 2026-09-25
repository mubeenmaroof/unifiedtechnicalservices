"use client";

import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("@/components/OfficeMap"), {
  ssr: false,

  loading: () => (
    <div className="flex min-h-[380px] h-full w-full items-center justify-center bg-[#020817]">
      <div className="text-center">
        <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-slate-700 border-t-sky-400" />

        <div className="mt-4 text-sm font-semibold text-white">
          Loading Office Map
        </div>

        <div className="mt-1 text-xs text-slate-500">Preparing location...</div>
      </div>
    </div>
  ),
});

type OfficeMapLoaderProps = {
  latitude: number;
  longitude: number;
  companyName?: string;
  address?: string;
};

export default function OfficeMapLoader(props: OfficeMapLoaderProps) {
  return <OfficeMap {...props} />;
}
