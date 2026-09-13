"use client";

export default function BlueprintBuilding() {
  return (
    <div className="blueprint-building" aria-hidden="true">
      <div className="bp-grid" />
      <div className="bp-floor floor-a" />
      <div className="bp-floor floor-b" />
      <div className="bp-floor floor-c" />
      <div className="bp-floor floor-d" />
      <div className="bp-column c1" />
      <div className="bp-column c2" />
      <div className="bp-column c3" />
      <div className="bp-column c4" />
      <div className="bp-column c5" />
      <div className="bp-column c6" />
      <div className="bp-beam b1" />
      <div className="bp-beam b2" />
      <div className="bp-beam b3" />
      <div className="bp-core" />
      <span className="bp-label l1">SAFE WORK SYSTEM</span>
      <span className="bp-label l2">TRAINING</span>
      <span className="bp-label l3">RISK CONTROL</span>
    </div>
  );
}
