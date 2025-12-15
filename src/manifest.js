/* SCTE-35 Ads module */

module.exports = manifest;

function manifest(){
	var type;
}

// For HLS, each splice command generates a #EXT-X-CUE-OUT/#EXT-X-CUE-OUT-CONT/#EXT-X-CUE-IN marker in the manifest playlist.
// The splice command also generates a #EXT-OATCLS-SCTE35 entry with the SCTE-35 data encoded in base64 format.
// ##TODO: DASH
// For DASH, each splice command generates a new period with an <EventStream> section in the MPD file.
/*  <EventStream timescale="1000000" schemeIdUri="urn:scte:scte35:2013:xml">
		<Event duration="45000000" id="1684475755">
			<SpliceInfoSection xmlns="http://www.scte.org/schemas/35">
				<SpliceInsert outOfNetworkIndicator="true" spliceImmediateFlag="true">
					<BreakDuration autoReturn="true" duration="45000000"/>
				</SpliceInsert>
			</SpliceInfoSection>
		</Event>
	</EventStream>
*/

// ##TODO: HLS to own module?
// Manifest Tags
const TAGS = {
  "#EXTM3U": "", /* e.g. #EXTM3U */
  "#EXT-X-VERSION": "", /* e.g. #EXT-X-VERSION:3 */
  "#EXT-X-TARGETDURATION": "", /* e.g. #EXT-X-TARGETDURATION:10 */
  "#EXTINF,": "", /* e.g. #EXTINF:10 */
  "#EXT-X-CUE-OUT": "", /* e.g. "#EXT-X-CUE-OUT:30 */
  "#EXT-X-CUE-OUT-CONT": "", /* e.g. #EXT-X-CUE-OUT-CONT:10/30 */
  "#EXT-X-CUE-OUT-CONT": "", /* e.g. #EXT-X-CUE-OUT-CONT:20/30 */
  "#EXT-X-CUE-IN": "", /* e.g. #EXT-X-CUE-IN */
  "#EXT-X-ENDLIST": "", /* e.g. #EXT-X-ENDLIST */
  "#EXTINF,": "", /* e.g. #EXTINF:5.02075 */
  "#EXT-OATCLS-SCTE35": "", /* e.g. #EXT-OATCLS-SCTE35:/AAlAAAAAAAAAP/wFAUAAAABAOCAAAAjgoABoyUYAAABAAAAIpycQw== */
  "#EXT-X-CUE-OUT": "", /* e.g. #EXT-X-CUE-OUT: Duration=305.00 */
  "#EXTINF": "", /* e.g. #EXTINF:0.213375 */
  "#EXT-X-CUE-OUT-CONT": "", /* e.g. #EXT-X-CUE-OUT-CONT: ElapsedTime=305.00,Duration=305.00,SCTE35=/AAlAAAAAAAAAP/wFAUAAAABAOCAAABHXoABoyUYAAABAAAAIpycQw== */
};

export {
	TAGS,
}