import { connect } from "mqtt";
import { NextResponse } from "next/server";

export const runtime = "edge"; // Commenting this out makes it work

export function GET(): NextResponse<unknown> {
  connect("mqtt://test.mosquitto.org:1883"); // Commenting this out makes it work
  return NextResponse.json("hello");
}
