/// <reference types="@fastly/js-compute" />
import { SCTE35 } from "scte35";
import { Parser } from "m3u8-parser";
import { includeBytes } from "fastly:experimental";
import { Manifest } from "./manifest";

// ##TODO: testing - Load a static file as a Uint8Array at compile time, file path is relative to root of project, not to this file.
const m3u8 = includeBytes("./example-live-20251006.m3u8");

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  const base64Scte35 = '/AAlAAAAAAAAAP/wFAUAAAABAOCAAABHXoABoyUYAAABAAAAIpycQw==';
  getAd(base64Scte35);
  const m3u8 = processAd();
//  return new Response("OK", { status: 200 });
  return new Response(m3u8.manifest, { status: 200 });
}

function getAd(base64Scte35) {
  const scte35 = new SCTE35();
  //{ tableId: 252, selectionSyntaxIndicator: false, privateIndicator: false, sectionLength: 37, protocolVersion: 0, encryptedPacket: false, encryptedAlgorithm: 0, ptsAdjustment: 0, cwIndex: 0, tier: 4095, spliceCommandLength: 20, spliceCommandType: 5, spliceCommand: { spliceEventId: 1, spliceEventCancelIndicator: false, outOfNetworkIndicator: true, programSpliceFlag: true, durationFlag: true, spliceImmediateFlag: false, spliceTime: { specified: true, pts: 18270 }, breakDuration: { autoReturn: true, duration: 27469080 }, uniqueProgramId: 0, available: 1, expected: 0 }, descriptorLoopLength: 0, crc: 580688963 }
  const jsonAd = scte35.parseFromB64(base64Scte35);
  console.log(jsonAd);
}

function processAd() {
  const parser = new Parser();
  parser.manifest = m3u8;
  return parser;
}

/*
return new Response(welcomePage, {
  status: 200,
  headers: new Headers({ "Content-Type": "text/html; charset=utf-8" }),
});
*/