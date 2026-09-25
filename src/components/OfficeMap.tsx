"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

type OfficeMapProps = {
  latitude: number;
  longitude: number;
  companyName?: string;
  address?: string;
};

/* =====================================================
   CUSTOM COMPANY MARKER
===================================================== */

const companyMarker = L.divIcon({
  className: "uts-company-marker",

  html: `
    <div
      style="
        position: relative;
        width: 46px;
        height: 46px;
        border-radius: 14px;
        background: #0ea5e9;
        border: 3px solid #ffffff;
        box-shadow:
          0 0 0 8px rgba(14,165,233,0.15),
          0 10px 35px rgba(0,0,0,0.45);
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        style="
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 12px rgba(255,255,255,0.8);
        "
      ></div>
    </div>
  `,

  iconSize: [46, 46],

  iconAnchor: [23, 23],

  popupAnchor: [0, -30],
});

/* =====================================================
   OFFICE MAP
===================================================== */

export default function OfficeMap({
  latitude,
  longitude,
  companyName = "Unified Technical Services",
  address,
}: OfficeMapProps) {
  const position: [number, number] = [latitude, longitude];

  return (
    <div className="relative h-full min-h-[380px] w-full overflow-hidden bg-[#020817]">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-full min-h-[380px] w-full"
      >
        {/* ===========================================
            OPENSTREETMAP
        =========================================== */}

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ===========================================
            ZOOM CONTROL
        =========================================== */}

        <ZoomControl position="bottomright" />

        {/* ===========================================
            COMPANY LOCATION
        =========================================== */}

        <Marker position={position} icon={companyMarker}>
          <Popup>
            <div
              style={{
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                {companyName}
              </div>

              {address && (
                <div
                  style={{
                    marginTop: "6px",
                    fontSize: "12px",
                    lineHeight: "18px",
                  }}
                >
                  {address}
                </div>
              )}

              <div
                style={{
                  marginTop: "8px",
                  fontSize: "11px",
                  opacity: 0.65,
                }}
              >
                {latitude.toFixed(6)}, {longitude.toFixed(6)}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* ===============================================
          MAP TOP LABEL
      =============================================== */}

      <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-xl border border-white/10 bg-[#020817]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-sky-400">
          Company Location
        </div>

        <div className="mt-1 text-xs font-semibold text-white">
          {companyName}
        </div>
      </div>

      {/* ===============================================
          COORDINATES BADGE
      =============================================== */}

      <div className="pointer-events-none absolute bottom-4 left-4 z-[500] hidden rounded-xl border border-white/10 bg-[#020817]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
        <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
          GPS Location
        </div>

        <div className="mt-1 font-mono text-[10px] text-slate-300">
          {latitude.toFixed(6)}, {longitude.toFixed(6)}
        </div>
      </div>
    </div>
  );
}
