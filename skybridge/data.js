// SkyBridge Cargo (fiktiv). Datumsangaben relativ zu heute (Tage, Uhrzeit), damit die Demo jeden Tag passt.
var SB = {
 "999-48213365": { origin:"FRA", dest:"TPE", pcs:6, kg:842, vol:"4,1 m³", goods:"Machined steel parts", shipper:"Demo Spedition GmbH a/c Sauerland Muster Automotive GmbH", consignee:"Ejemplo Precision Co., Ltd., Taoyuan",
   flights:[["SB 412","FRA","ICN",-1,"12:35"],["SB 763","ICN","TPE",1,"09:10"]], eta:[1,"11:45"], etaOrig:[0,"11:45"], status:"Missed connection", tone:"warn",
   ev:[[-3,"10:12","BKD","Booked","FRA","Booked on SB 412 / SB 761"],[-2,"15:40","RCS","Received from shipper","FRA","6 pcs / 842 kg"],[-1,"12:48","DEP","Departed","FRA","SB 412 to ICN"],[0,"06:52","ARR","Arrived","ICN","SB 412, delayed 95 min"],
       [0,"08:20","TFD","Missed connection","ICN","Not loaded on SB 761 (late arrival). Rebooked on SB 763, departure tomorrow 09:10. New ETA TPE tomorrow 11:45 (+1 day)"]] },
 "999-48213380": { origin:"PVG", dest:"FRA", pcs:14, kg:2310, vol:"11,8 m³", goods:"Electronic control units", shipper:"Shili Electronics (Demo) Ltd., Shanghai", consignee:"Demo Spedition GmbH a/c Beispiel Steuerungstechnik GmbH",
   flights:[["SB 237","PVG","FRA",-2,"23:50"]], eta:[-1,"06:20"], etaOrig:[-1,"06:20"], status:"Ready for pick-up", tone:"ok",
   ev:[[-4,"09:00","BKD","Booked","PVG",""],[-3,"16:20","RCS","Received from shipper","PVG","14 pcs / 2.310 kg"],[-2,"23:58","DEP","Departed","PVG","SB 237"],[-1,"06:14","ARR","Arrived","FRA","SB 237"],
       [-1,"09:40","RCF","Received from flight","FRA","14 pcs"],[0,"08:40","CRL","Customs released","FRA","Import clearance completed"],[0,"08:55","NFD","Ready for pick-up","FRA","CargoCity Süd, Halle 551, Tor 12. Storage free until day after tomorrow 18:00"]] },
 "999-48213391": { origin:"SGN", dest:"FRA", pcs:9, kg:1275, vol:"6,2 m³", goods:"Plastic housings", shipper:"Vidu Plastics (Demo) JSC, Ho Chi Minh City", consignee:"Demo Spedition GmbH a/c Beispiel Kunststofftechnik GmbH",
   flights:[["SB 318","SGN","FRA",-2,"23:15"]], eta:[-1,"07:05"], etaOrig:[-1,"07:05"], status:"Customs hold", tone:"bad",
   ev:[[-4,"11:30","BKD","Booked","SGN",""],[-3,"14:10","RCS","Received from shipper","SGN","9 pcs / 1.275 kg"],[-2,"23:20","DEP","Departed","SGN","SB 318"],[-1,"07:01","ARR","Arrived","FRA","SB 318"],
       [-1,"10:15","RCF","Received from flight","FRA","9 pcs"],[0,"09:20","HLD","Customs hold","FRA","Commercial invoice missing in document pouch. Shipment held by customs until invoice is presented"]] },
 "999-48213402": { origin:"FRA", dest:"ATL", pcs:3, kg:410, vol:"1,9 m³", goods:"Valve assemblies", shipper:"Demo Spedition GmbH a/c Muster Armaturen KG", consignee:"Sample Valves Inc., Atlanta GA",
   flights:[["SB 220","FRA","ATL",0,"08:25"]], eta:[0,"12:25"], etaOrig:[0,"12:25"], status:"Departed", tone:"ok",
   ev:[[-2,"08:45","BKD","Booked","FRA",""],[-1,"16:05","RCS","Received from shipper","FRA","3 pcs / 410 kg"],[0,"06:10","MAN","Manifested","FRA","SB 220"],[0,"08:31","DEP","Departed","FRA","SB 220 to ATL, on time"]] }
};
