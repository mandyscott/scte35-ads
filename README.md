# SCTE 35 at the edge

Deal with SCTE-35 ad markers at the edge.

## TODOs

* As requests come in for an m3u8
	* request the m3u8 from the origin
	* extract SCTE markers from the meu8
	* store in list if not already there
	* process marker
		* retrieve ad
		* transcoding??
		* replace in manifest with new ad segment
	* remove marker once processed
* ts requests?
* fmp4 requests?
* cmaf?