// Nordmeer Container Line (fiktiv). Tage relativ zu heute.
var NM = {
 "NMCU4012345": { bl:"NMCL26HAM0417", type:"40' HC", dir:"Export", pol:"Hamburg (DEHAM)", pod:"Shanghai (CNSHA)", ts:"", shipper:"Demo Spedition GmbH a/c Demo Federntechnik GmbH", status:"Rolled over", tone:"warn",
   vessel:"NORDMEER BOREAS", voy:"2648W", etd:5, etdOrig:-1, eta:37, etaOrig:31, oldVessel:"NORDMEER AURORA 2647W",
   ev:[[-7,"Empty container released","Hamburg"],[-5,"Gate in full","Hamburg, CTA"],[-1,"Rolled over","Hamburg: not loaded on NORDMEER AURORA 2647W due to overbooking. Rebooked on NORDMEER BOREAS 2648W, ETD +6 days"]] },
 "NMCU4022887": { bl:"NMCL26KHH0388", type:"20' DV", dir:"Import", pol:"Kaohsiung (TWKHH)", pod:"Rotterdam (NLRTM)", ts:"", shipper:"Taiwan Demo Fasteners Co., Ltd.", status:"Available for pick-up", tone:"ok",
   vessel:"NORDMEER CASSIOPEIA", voy:"2644E", etd:-33, etdOrig:-33, eta:-1, etaOrig:-1,
   ev:[[-35,"Gate in full","Kaohsiung"],[-33,"Loaded on vessel","Kaohsiung, NORDMEER CASSIOPEIA 2644E"],[-1,"Vessel arrived","Rotterdam"],[-1,"Discharged","Rotterdam, ECT Delta Terminal"],[0,"Available for pick-up","Rotterdam, ECT Delta. Customs status: T1 transit allowed. Pin code released to forwarder. Free time until +4 days"]] },
 "NMCU4031172": { bl:"NMCL26RTM0452", type:"40' DV", dir:"Export", pol:"Rotterdam (NLRTM)", pod:"Savannah (USSAV)", ts:"", shipper:"Demo Spedition GmbH a/c Beispiel Leuchten GmbH", status:"On board / sailing", tone:"ok",
   vessel:"NORDMEER DRACO", voy:"2651W", etd:-2, etdOrig:-2, eta:9, etaOrig:9,
   ev:[[-6,"Gate in full","Rotterdam"],[-3,"Loaded on vessel","Rotterdam, NORDMEER DRACO 2651W"],[-2,"Vessel departed","Rotterdam, on schedule"]] },
 "NMCU4045516": { bl:"NMCL26BRV0399", type:"40' HC", dir:"Export", pol:"Bremerhaven (DEBRV)", pod:"Haiphong (VNHPH)", ts:"Singapore (SGSIN)", shipper:"Demo Spedition GmbH a/c Muster Stanztechnik GmbH", status:"On board / sailing", tone:"ok",
   vessel:"NORDMEER ERIDANUS", voy:"2639E", etd:-10, etdOrig:-10, eta:18, etaOrig:18,
   ev:[[-13,"Gate in full","Bremerhaven"],[-10,"Vessel departed","Bremerhaven, NORDMEER ERIDANUS 2639E"],[-1,"Passed Suez Canal","on schedule, transshipment Singapore planned"]] },
 "NMCU4058830": { bl:"NMCL26NGB0361", type:"40' HC", dir:"Import", pol:"Ningbo (CNNGB)", pod:"Hamburg (DEHAM)", ts:"", shipper:"Ningbo Sample Tools Co., Ltd.", status:"On board / sailing", tone:"ok",
   vessel:"NORDMEER FORNAX", voy:"2640W", etd:-20, etdOrig:-20, eta:6, etaOrig:6,
   ev:[[-22,"Gate in full","Ningbo"],[-20,"Vessel departed","Ningbo, NORDMEER FORNAX 2640W"],[-2,"Vessel position","Mediterranean Sea, on schedule"]] }
};
var NM_BL = {}; for (var k in NM) NM_BL[NM[k].bl] = k;
