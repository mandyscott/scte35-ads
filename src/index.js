/// <reference types="@fastly/js-compute" />
import { SCTE35 } from "scte35";

//const scte35 = require('scte35');

// Example Base64 encoded SCTE-35 message
/*
try {
  const parsedScte35 = scte35.parse(base64Scte35);
  console.log(JSON.stringify(parsedScte35, null, 2));
} catch (error) {
  console.error("Error parsing SCTE-35:", error);
}
  */

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  getAd();
  return new Response("OK", { status: 200 });
}

function getAd() {
  const scte35 = new SCTE35();
  const base64Scte35 = '/AAlAAAAAAAAAP/wFAUAAAABAOCAAABHXoABoyUYAAABAAAAIpycQw==';
  //{ tableId: 252, selectionSyntaxIndicator: false, privateIndicator: false, sectionLength: 37, protocolVersion: 0, encryptedPacket: false, encryptedAlgorithm: 0, ptsAdjustment: 0, cwIndex: 0, tier: 4095, spliceCommandLength: 20, spliceCommandType: 5, spliceCommand: { spliceEventId: 1, spliceEventCancelIndicator: false, outOfNetworkIndicator: true, programSpliceFlag: true, durationFlag: true, spliceImmediateFlag: false, spliceTime: { specified: true, pts: 18270 }, breakDuration: { autoReturn: true, duration: 27469080 }, uniqueProgramId: 0, available: 1, expected: 0 }, descriptorLoopLength: 0, crc: 580688963 }
  const result = scte35.parseFromB64(base64Scte35);
  console.log(result);
}