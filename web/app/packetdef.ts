import { ServerKind, MessageOrigin } from "./cassette";

interface PacketDef {
  Kind: ServerKind;
  Origin: MessageOrigin;
  From: string;
  Defs: { [id: string]: string };
}

const packetDefs: PacketDef[] = [
  {
    Kind: "LoginServer",
    Origin: "client",
    From: "pangbox/packetdoc",
    Defs: {
      "0001": "0001-Login",
      "0003": "0003-Select Server",
      "0004": "0004-Ghost",
      "0006": "0006-Set Nickname",
      "0007": "0007-Check Nickname",
      "0008": "0008-Select Character",
      "000B": "000B-Reconnect"
    }
  },
  {
    Kind: "LoginServer",
    Origin: "server",
    From: "pangbox/packetdoc",
    Defs: {
      "0001": "0001-Login",
      "0002": "0002-Game Server List",
      "0003": "0003-Session Key",
      "0006": "0006-Chat Macro List",
      "0009": "0009-Message Server List",
      "0010": "0010-Login Key",
      "0040": "UNDOC-HS-GG_CHECK",
      "004D": "UNDOC-HS-LOBBIES_LIST"
    }
  },
  {
    Kind: "MessageServer",
    Origin: "client",
    From: "pangbox/packetdoc",
    Defs: {
      "0012": "0012-Credential Declaration",
      "0014": "0014-Hello",
      "0016": "0016-Goodbye",
      "0017": "0017-User ID Lookup",
      "0018": "UNDOC-STUB (Friend Request?)",
      "001D": "001D-Status Declaration",
      "0023": "0023-Server Declaration"
    }
  },
  {
    Kind: "MessageServer",
    Origin: "server",
    From: "pangbox/packetdoc",
    Defs: {
      "002F": "002F-Credential Declaration Response",
      "0030": "0030-Status Packet"
    }
  },
  {
    Kind: "GameServer",
    Origin: "client",
    From: "pangbox/packetdoc",
    Defs: {
      "0002": "0002-Hello/Login",
      "0003": "0003-Message Send",
      "0004": "0004-Connect to Sub-Server",
      "0007": "0007-User Status Request",
      "0008": "0008-Room Create",
      "0009": "0009-Room Join",
      "000A": "000A-Room Settings Change",
      "000B": "UNDOC-HS-PLAYER_CHANGE_EQUPMENT_A",
      "000C": "000C-User Equipment Change",
      "000D": "000D-Room User Ready State",
      "000E": "UNDOC-HS-PLAYER_START_GAME",
      "000F": "000F-Room Leave",
      "0010": "0010-User Team Change",
      "0011": "UNDOC-HS-PLAYER_LOAD_OK",
      "0012": "0012-Shot Commit",
      "0013": "0013-Shot Rotate/Aim",
      "0014": "0014-Shot Meter Input",
      "0015": "0015-Shot Power",
      "0016": "0016-Shot Club Change",
      "0017": "0017-Shot Item Use",
      "0019": "UNDOC-HS-PLAYER_MOVE_AZTEC",
      "001A": "UNDOC-HS-PLAYER_HOLE_INFORMATIONS",
      "001B": "UNDOC-HS-PLAYER_SHOTDATA",
      "001C": "001C-Room Resync",
      "001D": "001D-Pangya Shop Purchase",
      "001F": "UNDOC-STUB",
      "0020": "0020-Equipment Update",
      "0022": "0022-Shot Active User Acknowledge",
      "0026": "UNDOC-HS-MASTER_KICK_PLAYER",
      "0029": "0029-Room Invite Send",
      "002A": "002A-Whisper Send",
      "002D": "002D-Room Information Request",
      "002F": "002F-User Information Request",
      "0030": "UNDOC-HS-PLAYER_PAUSE_GAME",
      "0031": "UNDOC-HS-PLAYER_HOLE_COMPLETE",
      "0033": "UNDOC-HS-PLAYER_EXCEPTION",
      "0034": "UNDOC-HS-PLAYER_1ST_SHOT_READY",
      "003C": "003C-Note Send",
      "003D": "003D-Cookie Balance Request",
      "003E": "UNDOC-HS-ADMIN_JOIN_GAME",
      "0041": "UNDOC-HS-PLAYER_REQUEST_IDENTITY",
      "0043": "0043-Server List Request",
      "0048": "UNDOC-STUB (Loading Related)",
      "004B": "UNDOC-HS-PLAYER_UPGRADE",
      "0057": "UNDOC-HS-PLAYER_NOTICE",
      "005C": "UNDOC-HS-PLAYER_REQUEST_SERVER_TIME",
      "0063": "0063-User Lounge Action",
      "0064": "UNDOC-HS-PLAYER_DELETE_ITEM",
      "0065": "UNDOC-HS-PLAYER_FAST_FORWARD",
      "0069": "0069-Chat Macro Update",
      "0070": "0070-Scratchy Play",
      "0071": "UNDOC-HS-PLAYER_ENTER_SCRATCHY_SERIAL",
      "0073": "UNDOC-HS-PLAYER_SET_MASCOT_TEXT",
      "0075": "UNDOC-HS-PLAYER_CLOSE_SHOP",
      "0076": "UNDOC-HS-PLAYER_EDIT_SHOP",
      "0077": "0077-User Shop Inventory Request",
      "0078": "0078-User Shop Leave",
      "0079": "UNDOC-HS-PLAYER_EDIT_SHOP_NAME",
      "007A": "UNDOC-HS-PLAYER_REQUEST_SHOP_VISITORS_COUNT",
      "007B": "UNDOC-HS-PLAYER_REQUEST_INCOME",
      "007C": "UNDOC-HS-PLAYER_EDIT_SHOP_ITEMS",
      "007D": "007D-User Shop Purchase",
      "0081": "0081-Multiplayer Mode Join",
      "0082": "0082-Multiplayer Mode Leave",
      "0088": "0088-Authentication Keep-Alive Response",
      "008B": "UNDOC-HS-PLAYER_REQUEST_MESSENGER_LIST",
      "008F": "UNDOC-HS-PLAYER_GM_COMMAND",
      "0098": "0098-Rare Shop Open",
      "009C": "UNDOC-STUB (VS Mode Opponent Related)",
      "00A2": "UNDOC-STUB (Cookies Related)",
      "00AE": "UNDOC-HS-PLAYER_CLEAR_QUEST",
      "00B5": "00B5-Inventory Open A",
      "00B7": "00B7-Inventory Open B",
      "00BA": "00BA-Room Invite Send",
      "00CA": "00CA-Cardholic Pack Open",
      "00CC": "00CC-Locker Combination Attempt",
      "00CD": "00CD-Locker Page Request",
      "00CE": "00CE-Locker Item Deposit",
      "00CF": "00CF-Locker Item Withdraw",
      "00D1": "UNDOC-HS-PLAYER_CHANGE_LOCKER_PASSWORD",
      "00D3": "00D3-Locker Inventory Request",
      "00D4": "00D4-Locker Pang Transact",
      "00D5": "00D5-Locker Pang Balance Request",
      "00EB": "UNDOC-STUB (Lounge Related)",
      "0101": "UNDOC-HS-PLAYER_GUILD_CREATE",
      "0102": "UNDOC-HS-PLAYER_GUILD_CHECK_NAME",
      "0108": "0108-Guild List Request",
      "0109": "0109-Guild Search Request",
      "010C": "UNDOC-HS-PLAYER_GUILD_REQUEST_JOIN",
      "0119": "0119-New Session Key / Switch Server Request",
      "012A": "012A-Scratchy Menu Open",
      "0140": "UNDOC-HS-PLAYER_UN_0140",
      "0143": "0143-Mailbox Request",
      "0144": "0144-Mail Read Request",
      "0145": "0145-Mail Send",
      "0146": "0146-Mail Attachments Take",
      "0147": "0147-Mail Delete",
      "014B": "014B-Black Papel Play",
      "0151": "0151-Quest Status Request",
      "0152": "0152-Quest Accept",
      "0153": "0153-Quest Submit",
      "0154": "0154-Quest Dismiss",
      "0155": "0155-Tiki Shop Card Exchange",
      "0157": "0157-Achievement Status Request",
      "0158": "0158-Tiki Shop Item Convert",
      "016E": "016E-Login Bonus Status Request",
      "016F": "016F-Login Bonus Claim",
      "0176": "0176-Event Mode Join",
      "0177": "0177-Event Mode Leave",
      "0179": "0179-Event Mode Room Join",
      "017A": "017A-Event Mode Room Leave",
      "017F": "017F-Memorial Coin Play",
      "0184": "0184-Shot Assist Toggle",
      "0185": "0185-Shot Assist Activate",
      "0188": "UNDOC-HS-PLAYER_CHAR_MASTERY",
      "018D": "018D-Tiki Shop Item Recycle",
      "0195": "UNDOC-STUB (Cookies Related)"
    }
  },
  {
    Kind: "GameServer",
    Origin: "server",
    From: "pangbox/packetdoc",
    Defs: {
      "0040": "0040-Message Data",
      "0044": "UNDOC-HS-PLAYER_MAIN_DATA",
      "0046": "0046-User Census",
      "0047": "0047-Room List",
      "0048": "0048-Room Census",
      "0049": "0049-Room Join Response",
      "004A": "004A-Room Settings Announce",
      "004B": "004B-User Equipment Change Announce",
      "004C": "004C-Room Leave Response",
      "004D": "004D-Sub-Server List",
      "0052": "UNDOC-HS-GAME_PLAY_INFO",
      "0055": "0055-Shot Commit Announce",
      "0056": "0056-Shot Rotate/Aim Announce",
      "0058": "0058-Shot Power Announce",
      "0059": "0059-Shot Club Change Announce",
      "005A": "005A-Item Use Announce",
      "005B": "005B-Room Resync?",
      "0063": "0063-Shot Active User Announce",
      "0065": "0065-Room Resync?",
      "0066": "0066-Room Match Results",
      "0068": "0068-Pangya Shop Purchase Response",
      "006B": "006B-Equipment Response",
      "006C": "006C-Tournament User Finish",
      "006D": "006D-Tournament User Update",
      "006E": "UNDOC-STUB (Tourney Related Announce)",
      "0070": "0070-User Character Roster",
      "0071": "0071-User Caddie Roster",
      "0072": "0072-User Equipment",
      "0073": "0073-User Inventory",
      "0078": "0078-Room User Ready State Response",
      "007D": "007D-User Team Change Announce",
      "0083": "0083-Room Invite",
      "0084": "0084-Whisper Data",
      "0086": "0086-Room Information Response",
      "0089": "0089-User Information Response",
      "0090": "UNDOC-HS-PLAYER_1ST_SHOT_READY",
      "0095": "0095-Money Update",
      "0096": "0096-Cookie Balance",
      "009F": "009F-Server List",
      "00A1": "00A1-User Status Response",
      "00A3": "UNDOC-HS-PLAYER_LOADING_INFO",
      "00A7": "00A7-Lootbox Inventory Update",
      "00AA": "00AA-Inventory Slot Assign",
      "00C4": "00C4-User Lounge Action Announce",
      "00C8": "00C8-Pang Balance",
      "00C9": "00C9-Notice Data",
      "00CC": "00CC-Shot Resync Collectables",
      "00CE": "00CE-Tournament Item Winnings",
      "00D7": "00D7-Authentication Keep-Alive Challenge",
      "00DD": "00DD-Scratchy Play Result",
      "00E1": "UNDOC-HS-PLAYER_MASCOTS_DATA",
      "00E6": "00E6-User Shop Inventory",
      "00E7": "00E7-User Shop Leave Response",
      "00EC": "00EC-Item Transact",
      "00ED": "00ED-User Shop Purchase Announce",
      "00F5": "00F5-Multiplayer Mode Join Response",
      "00F6": "00F6-Multiplayer Mode Leave Response",
      "00FA": "00FA-Room Bonus Collectables Result",
      "00FB": "UNDOC-STUB (Black Papel Related)",
      "010B": "010B-Rare Shop Open Response",
      "010C": "UNDOC-STUB (VS Mode Opponent Related)",
      "012B": "012B-Inventory Open A Response",
      "012D": "012D-My Room Layout",
      "012F": "012F-Room Invite Send Response",
      "0130": "0130-Room Invite Send Response",
      "0131": "UNDOC-STUB",
      "0132": "0132-Treasure Point Status",
      "0133": "0133-Treasure Point Result",
      "0134": "0134-Treasure Point Winnings",
      "0138": "0138-User Cardholic Inventory",
      "0139": "0139-Locker Item Deposit Response A",
      "0154": "0154-Cardholic Pack Open Response",
      "0156": "0156-User Information Consumables",
      "0157": "UNDOC-STUB (User Related)",
      "0158": "UNDOC-STUB (User Related)",
      "0159": "UNDOC-STUB (User Related)",
      "015A": "UNDOC-STUB (User Related)",
      "015B": "UNDOC-STUB (User Related)",
      "015C": "015C-User Information Course Records",
      "015D": "015D-User Information Guild",
      "015E": "015E-User Information Character",
      "0168": "0168-User Information",
      "016C": "016C-Locker Combination Response",
      "016D": "016D-Locker Page Response",
      "016E": "016E-Locker Item Deposit Response B",
      "016F": "016F-Locker Item Withdraw Response",
      "0170": "0170-Locker Inventory Response",
      "0171": "0171-Locker Pang Transact Response",
      "0172": "0172-Locker Pang Balance",
      "0196": "UNDOC-STUB (Lounge Related)",
      "0199": "0199-Room Resync User Finish",
      "019D": "019D-Lootbox Open Result",
      "01BC": "01BC-Guild List",
      "01BD": "01BD-Guild Search Response",
      "01D3": "01D3-Lootbox Jackpot Announce",
      "01D4": "01D4-New Session Key",
      "01EB": "01EB-Scratchy Menu Response",
      "01F7": "UNDOC-STUB (Tourney Related)",
      "0210": "0210-Mail Unread List",
      "0211": "0211-Mailbox Response",
      "0212": "0212-Mail Read Response",
      "0213": "0213-Mail Send Response",
      "0214": "0214-Mail Attachments Take Response",
      "0215": "0215-Mail Delete Response",
      "0216": "0216-User Status Update",
      "021B": "021B-Black Papel Result",
      "021D": "021D-Achievement Progress Report",
      "021E": "021E-Achievement Association Report",
      "0220": "0220-Achievement Update",
      "0225": "0225-Quest Status Response",
      "0226": "0226-Quest Accept Response",
      "0227": "0227-Quest Submit Response",
      "0228": "0228-Quest Dismiss Response",
      "0229": "0229-Tiki Shop Card Exchange Response A",
      "022A": "022A-Tiki Shop Card Exchange Response B",
      "022C": "UNDOC-STUB (Achievement Related Response)",
      "022D": "022D-Achievement Status Response",
      "022E": "022E-Achievement Unlocked",
      "022F": "022F-Tiki Shop Item Convert Response",
      "0248": "0248-Login Bonus Status Response",
      "0249": "0249-Login Bonus Claim Response",
      "0250": "0250-Event Mode Join Response",
      "0251": "0251-Event Mode Leave Response",
      "0253": "0253-Event Room Join Response",
      "0254": "0254-Event Room Leave Response",
      "0257": "UNDOC-STUB (User Related Response)",
      "0264": "0264-Memorial Coin Result",
      "026A": "026A-Shot Assist Toggle Response",
      "026B": "026B-Shot Assist Activate Response",
      "0274": "0274-Tiki Shop Item Recycle Response",
      "027D": "UNDOC-STUB (Cookies Related Response)"
    }
  }
];

function toHex(i: number, pad: number) {
  return ("0".repeat(pad) + i.toString(0x10)).substr(-pad);
}

export function getPacketName(kind: ServerKind, origin: MessageOrigin, packetId: number): string|null {
  const key = toHex(packetId, 4).toUpperCase();

  for (const {Kind,Origin,Defs} of packetDefs) {
    if (Kind !== kind || origin != Origin) {
      continue;
    }

    if (Defs[key]) {
      return Defs[key];
    }
  }

  return null;
}
