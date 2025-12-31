/**
 * 聖經考古救贖之旅 - 資料庫 (支援多圖版)
 * 更新重點：
 * 1. 在 ID 1 (別是巴) 新增 "images" 欄位作為多圖範例。
 * 格式：images: ["1.jpg", "1_detail.jpg"]
 * 2. 其他地點若無此欄位，程式會自動預設讀取單張 "{id}.jpg"。
 */

const redemptionPathData = [
  // --- 第一章：應許與預備 ---
  {
    id: 1,
    name: "別是巴",
    englishName: "Beer-sheba",
    category: "第一章：應許與預備",
    role: "盟約的開端",
    // ★★★ 新增多張圖片範例 ★★★
    // 請將對應的圖片檔案放入 image/archeology/ 資料夾中
    images: ["1.jpg", "1_1.jpg"], 
    archaeology: "此處是以色列南區的一處考古遺址，據信是聖經城鎮別是巴的遺址，它位於現代城市以東幾公里處。此外，城內出土的「四角祭壇」（雖然後來被拆毀），證實了這裡自古以來就是一個重要的宗教敬拜中心，印證了列祖在此築壇的傳統。",
    description: "亞伯拉罕與非利士王亞比米勒在此指著七隻母羊羔起誓立約，將那地方起名為「別是巴」(意為盟誓之井)。亞伯拉罕在此栽上一棵垂絲柳樹，求告耶和華─永生神的名。這是救贖歷史中，神與人立約、人公開築壇獻祭的具體開端，標誌著信心家族在應許之地的扎根。",
    bibleRef: "創世記 21:33",
    location: { lat: 31.2447, lng: 34.8408 },
    archaeoLink: "https://en.wikipedia.org/wiki/Tel_Be%27er_Sheva"
  },
  {
    id: 2,
    name: "摩利亞山",
    englishName: "Mount Moriah",
    category: "第一章：應許與預備",
    role: "代贖的預表",
    images: ["2.jpg", "2_1.jpg"], 
    archaeology: "這座山的頂部現為圓頂清真寺，其內部巨大的「基石」(Foundation Stone) 裸露岩石，被傳統認定是亞伯拉罕獻以撒的祭壇原址，也是後來所羅門聖殿至聖所的所在地。周圍宏偉的希律時期擋土牆（包含西牆）至今仍存，見證了這座聖山作為敬拜中心的歷史。",
    description: "神吩咐亞伯拉罕帶著獨生愛子以撒，往摩利亞地去，在山上將他獻為燔祭。正當亞伯拉罕舉刀時，神預備了一隻公羊代替了以撒。這發生在兩千年前的順服行動，深刻地預表了父神在同一座山脈（耶路撒冷）上，獻上祂的獨生子耶穌基督，為全人類完成了真正的代贖。",
    bibleRef: "創世記 22:2",
    location: { lat: 31.7781, lng: 35.2353 },
    archaeoLink: "https://en.wikipedia.org/wiki/Temple_Mount"
  },
  {
    id: 3,
    name: "尼波山",
    englishName: "Mount Nebo",
    category: "第一章：應許與預備",
    role: "律法的界線",
    images: ["3.jpg", "3_1.jpg"], 
    archaeology: "山頂教堂的古代馬賽克地板保存完好，標示著這裡是紀念摩西離世的傳統地點。教堂外矗立著現代的「銅蛇十字架」雕塑，將摩西在曠野舉蛇的事件（民數記）與耶穌上十字架的救贖直接連結，象徵詮釋連結摩西與基督。",
    description: "摩西在此遙望他一生嚮往卻無法進入的應許之地。這不僅是地理的邊界，更是神學的界線：律法（摩西）只能領人到應許的門口，卻不能賜人安息；唯有耶穌（由約書亞預表）能帶領百姓過約旦河，得著豐盛的產業。這是一個關於順服、管教與更美盼望的深刻地點。",
    bibleRef: "申命記 34:1",
    location: { lat: 31.7669, lng: 35.7256 },
    archaeoLink: "https://en.wikipedia.org/wiki/Mount_Nebo"
  },
  {
    id: 4,
    name: "示劍",
    englishName: "Shechem",
    category: "第一章：應許與預備",
    role: "信心的傳承",
    archaeology: "在 Tell Balata 遺址的神廟入口處，發現了一塊巨大的豎立巨石 (Massebah)。考古學家推測這正是約書亞與百姓立約時所立那塊「大石」，用以見證以色列人承諾離棄外邦神、專心事奉耶和華的歷史時刻。",
    description: "這裡是亞伯拉罕進入應許之地後築的第一座壇，也是雅各買地居住之處。數百年後，約書亞在此召聚全體以色列人，在基利心山與以巴路山之間宣讀律法，並發出挑戰：「至於我和我家，我們必定事奉耶和華。」示劍見證了信心從個人應許轉化為群體盟約的關鍵時刻。",
    bibleRef: "約書亞記 24:26",
    location: { lat: 32.2136, lng: 35.2811 },
    archaeoLink: "https://opentheword.org/2023/09/20/have-archaeologists-discovered-joshuas-massabah-or-standing-stone/"
  },
  {
    id: 5,
    name: "以拉谷",
    englishName: "Valley of Elah",
    category: "第一章：應許與預備",
    role: "神是拯救者",
    archaeology: "在俯瞰以拉谷的 Khirbet Qeiyafa 堡壘遺址中，發現了兩座城門（符合聖經「沙拉音」雙門之意）以及大衛時期的橄欖核與兵器。這證實了在大衛擊殺歌利亞的時代，此地確實是猶大王國防禦非利士人入侵的重要軍事邊界，為著名的戰役提供了真實的歷史舞台。",
    description: "少年大衛在此面對全副武裝的巨人歌利亞。這場戰役的本質不是武力的對決，而是信仰的宣告：「你來攻擊我，是靠著刀槍和銅戟；我來攻擊你，是靠著萬軍之耶和華的名。」這顆光滑的石子，擊碎了人對軍事力量的迷信，確立了救贖歷史中「爭戰在於耶和華」的真理。",
    bibleRef: "撒母耳記上 17:45",
    location: { lat: 31.6963, lng: 34.9575 },
    archaeoLink: "https://en.wikipedia.org/wiki/Khirbet_Qeiyafa"
  },
  {
    id: 6,
    name: "希西家水道",
    englishName: "Hezekiah's Tunnel",
    category: "第一章：應許與預備",
    role: "餘民的保存",
    images: ["6.jpg", "6_1.jpg"], 
    archaeology: "在隧道內發現的「西羅亞銘文」(Siloam Inscription)，詳細記載了工人們如何從兩端挖掘並在中間會合的過程。這段銘文是鐵器時代最重要的希伯來文獻之一，直接證實了聖經列王紀下中，希西家王為了抵禦亞述軍隊圍城、保障水源供應而開鑿隧道的記載。",
    description: "當亞述大軍壓境，猶大國岌岌可危時，希西家王做出了關鍵的決定：保護水源。這條黑暗潮濕的水道，象徵著神在絕境中為祂的百姓開闢出路。神藉此保存了耶路撒冷，確保了大衛家的燈光不致熄滅，讓彌賽亞的家系得以在戰亂中延續，直到救主降生。",
    bibleRef: "列王紀下 20:20",
    location: { lat: 31.7724, lng: 35.2357 },
    archaeoLink: "https://en.wikipedia.org/wiki/Siloam_Tunnel"
  },

  // --- 第二章：道成肉身 ---
  {
    id: 7,
    name: "拿撒勒",
    englishName: "Nazareth",
    category: "第二章：道成肉身",
    role: "卑微的順服",
    archaeology: "考古學家在拿撒勒修女院地下發掘揭示了一座公元一世紀的“庭院式住宅”，其部分由天然岩石開鑿而成，部分則由石砌牆體構成。住宅的許多原始特徵至今保存完好，包括門窗。與歷史文獻中描述的耶穌成長地點相符，因此有學者認為這很可能是耶穌童年時期的住所或長期被視為耶穌成長之處。",
    description: "「拿撒勒還能出什麼好的嗎？」在這個被藐視的山城，道成了肉身。馬利亞在此說出「情願照你的話成就在我身上」，順服了神看似不可能的計畫。耶穌在此度過了三十年的隱藏生活，在木匠的勞作中認同了人類的貧窮與平凡，使得日常不再俗氣，而是充滿神聖。",
    bibleRef: "路加福音 1:38",
    location: { lat: 32.7022, lng: 35.2979 },
    archaeoLink: "https://www.biblicalarchaeology.org/daily/biblical-sites-places/biblical-archaeology-sites/has-the-childhood-home-of-jesus-been-found/"
  },
  {
    id: 8,
    name: "伯利恆",
    englishName: "Bethlehem",
    category: "第二章：道成肉身",
    role: "君王的降生",
    images: ["8.jpg", "8_1.jpg"], 
    archaeology: "主誕堂祭壇下方的古老洞穴，符合第一世紀伯利恆當地的居住習慣：房屋建築在洞穴之上，洞穴用於飼養牲畜或儲存物資。這解釋了為什麼耶穌會被放在「馬槽」裡——祂極可能就是降生在這類作為馬廄使用的地下洞穴中，而非木造的棚子。",
    description: "預言中的「伯利恆以法他」雖小，卻迎來了永恆的君王。因著奧古斯都的報名上冊令，約瑟和馬利亞長途跋涉至此。在客店沒有地方的窘迫中，救主降生在最卑微的馬槽裡。這是神進入人類歷史的方式——不是在宮殿的輝煌中，而是在脆弱與無助中，擁抱被遺棄的人。",
    bibleRef: "路加福音 2:11",
    location: { lat: 31.7044, lng: 35.2077 },
    archaeoLink: "https://www.bibleplaces.com/bethlehem/"
  },
  {
    id: 9,
    name: "約旦河外伯大尼",
    englishName: "Bethany Beyond Jordan",
    category: "第二章：道成肉身",
    role: "盡諸般的義",
    images: ["9.jpg", "9_1.jpg"], 
    archaeology: "Al-Maghtas 遺址發現了用於洗禮的大型水池與拜占庭時期的教堂遺跡，位置正好在約旦河東岸。這些發現證實了早期教會傳統，認定此處為施洗約翰進行施洗、以及耶穌受洗的確切地點，與福音書地理描述高度一致。",
    description: "無罪的耶穌來到約旦河，要求受施洗約翰的洗。這不是為了悔改，而是為了「盡諸般的義」。在此，天開了，聖靈彷彿鴿子降下，父神宣告「這是我的愛子」。耶穌主動將自己列在罪人之中，承擔人類的重擔，正式開啟了祂通往十字架的救贖事工。",
    bibleRef: "馬太福音 3:15",
    location: { lat: 31.8390, lng: 35.5435 },
    archaeoLink: "https://whc.unesco.org/en/list/1446/"
  },
  {
    id: 10,
    name: "迦百農",
    englishName: "Capernaum",
    category: "第二章：道成肉身",
    role: "天國的權能",
    archaeology: "在迦百農這座八角形拜占庭殉道者教堂的地基之下，考古學家們有了一個激動人心的聖經考古發現：一座公元一世紀的簡樸民居，它很可能是彼得的家，也就是耶穌在迦百農的住所。",
    description: "迦百農是耶穌傳道的基地，被稱為「自己的城」。在這裡，祂醫治彼得的岳母、讓癱子行走、在會堂趕逐污鬼。耶穌的權能在此展露無遺，祂不僅傳講天國的福音，更透過神蹟顯示神的國度已經臨到，主動入侵撒但的權勢範圍，釋放被擄的靈魂。",
    bibleRef: "馬可福音 1:21",
    location: { lat: 32.8810, lng: 35.5750 },
    archaeoLink: "https://www.biblicalarchaeology.org/daily/biblical-sites-places/biblical-archaeology-sites/the-house-of-peter-the-home-of-jesus-in-capernaum/"
  },
  {
    id: 11,
    name: "革尼撒勒湖邊",
    englishName: "Gennesaret",
    category: "第二章：道成肉身",
    role: "平靜風浪",
    archaeology: "1986年在加利利湖泥灘中發現的「耶穌船」，是一艘第一世紀的古木船。船身由多種拼湊的木頭製成，反映了當時漁民的生活狀況。這艘船的大小正好能容納耶穌與十二門徒，為福音書所描述的漁船生活場景提供了具體的時代實物背景。現存於伊加爾·阿隆中心。",
    description: "加利利海因地形關係常有突發暴風。當門徒在船上驚慌失措時，耶穌斥責風和海，大大地平靜了。這神蹟不僅顯示祂對自然界的主權，更向門徒啟示了祂的神性：「這到底是誰？」在人生的風暴中，救主不僅同在，更是那位能說「住了吧！靜了吧！」的掌權者。",
    bibleRef: "馬太福音 8:26",
    location: { lat: 32.8443, lng: 35.5245 },
    archaeoLink: "https://en.wikipedia.org/wiki/Sea_of_Galilee_Boat"
  },
  {
    id: 12,
    name: "畢士大池",
    englishName: "Pool of Bethesda",
    category: "第二章：道成肉身",
    role: "恩典的主權",
    archaeology: "1888年，考古學家開始在耶路撒冷聖安妮教堂附近進行挖掘，發現了畢士大池的遺跡，池邊一側有台階向下延伸，另一側則有五個淺淺的柱廊，這與約翰福音的描述完全吻合。",
    description: "在眾多等待水動的病患中，耶穌走向一位癱瘓了38年、無力爭先的人。耶穌沒有利用池水的傳說，而是單單用祂的話語：「起來，拿你的褥子走吧！」這神蹟表明救恩不是靠人的努力爭取（誰先下水），也不是靠宗教儀式，而是源於神主動的恩典與醫治的大能。",
    bibleRef: "約翰福音 5:8",
    location: { lat: 31.7815, lng: 35.2345 },
    archaeoLink: "https://discoverhistoricjesus.com/pool-of-bethesda/"
  },
  {
    id: 13,
    name: "西羅亞池",
    englishName: "Pool of Siloam",
    category: "第二章：道成肉身",
    role: "世界的光",
    images: ["13.jpg", "13_1.jpg"], 
    archaeology: "2025年在大衛城西羅亞池遺址發掘出的巨大水壩體，顯示規模宏大的西羅亞水壩建於西元前805年至795年間，正值聖經中的約阿施王或猶大王亞瑪謝統治時期。",
    description: "耶穌用唾沫和泥抹在瞎子眼睛上，命他去西羅亞池（意為「奉差遣」）洗。瞎子在順服的行動中重見光明。這神蹟發生在住棚節期間，當祭司從此池取水澆奠時，耶穌宣告自己是「世界的光」。瞎子的看見與法利賽人的靈性瞎眼形成強烈對比，揭示了審判與救贖的雙重性。",
    bibleRef: "約翰福音 9:5",
    location: { lat: 31.7706, lng: 35.2343 },
    archaeoLink: "https://archaeologymag.com/2025/08/ancient-jerusalems-siloam-dam-800-bce/"
  },
  {
    id: 14,
    name: "凱撒利亞‧腓立比",
    englishName: "Caesarea Philippi",
    category: "第二章：道成肉身",
    role: "教會的磐石",
    images: ["14.jpg", "14_1.jpg"], 
    archaeology: "在巴尼亞 (Banias) 的巨大岩壁上，考古學家發現了深邃的洞穴（古稱「陰間之門」）以及供奉潘神 (Pan) 的壁龕。這裡曾是充滿淫亂與偶像崇拜的異教中心。耶穌特意帶門徒來到這個代表「陰間權勢」的地標前，宣告教會的建立，背景意義極為深遠。",
    description: "正是在這偶像林立、被視為陰間門口的地方，耶穌問門徒：「你們說我是誰？」彼得石破天驚地宣告：「你是基督，是永生神的兒子。」耶穌隨即應許建立教會，並宣告「陰間的權柄不能勝過它」。在這黑暗勢力的核心，救主確立了教會得勝的根基。",
    bibleRef: "馬太福音 16:16",
    location: { lat: 33.2487, lng: 35.6946 },
    archaeoLink: "https://www.bibleplaces.com/caesarea-philippi-banias/"
  },

  // --- 第三章：受難與復活 ---
  {
    id: 15,
    name: "伯大尼",
    englishName: "Bethany",
    category: "第三章：受難與復活",
    role: "戰勝死亡",
    archaeology: "「拉撒路墓」是一個典型的第一世紀猶太墓穴，入口狹窄且深鑿入岩石，右下角的洞是墓穴的入口，拉撒路從墓穴中出來時，必須從這個洞爬出來，其地理位置與形制，與聖經記載耶穌使拉撒路復活的場景相符。",
    description: "在受難週前夕，耶穌在此行了最大的神蹟——叫死了四天的拉撒路復活。面對死亡的絕望，耶穌宣告：「復活在我，生命也在我。」這不僅是對拉撒路的拯救，更是耶穌對自己即將面臨的死亡與復活的預演。祂主動走近耶路撒冷，準備好面對十字架，因為祂掌握著勝過死亡的權柄。",
    bibleRef: "約翰福音 11:25",
    location: { lat: 31.7716, lng: 35.2558 },
    archaeoLink: "https://en.wikipedia.org/wiki/Tomb_of_Lazarus"
  },
  {
    id: 16,
    name: "橄欖山",
    englishName: "Mount of Olives",
    category: "第三章：受難與復活",
    role: "王的眼淚",
    archaeology: "橄欖山是一條長約兩英里的山脊，或稱為山麓，有三個山頂。橄欖山東側是曠野（即沙漠），一直延伸到耶利哥和約旦河谷。它因舊約和新約時代生長在那裡的橄欖樹林而得名。",
    description: "耶穌騎驢榮耀入城時，站在橄欖山上眺望耶路撒冷，祂沒有因群眾的歡呼而陶醉，反而為這城哀哭。祂預見了拒絕救主將帶來的毀滅（公元70年聖殿被毀）。神的救贖帶著極深的情感，祂不願一人沉淪，甚至為那些即將將祂釘十字架的人流淚。這是神聖的悲憫。",
    bibleRef: "路加福音 19:41",
    location: { lat: 31.7779, lng: 35.2456 },
    archaeoLink: "https://www.generationword.com/jerusalem101/12-mount-olives.html"
  },
  {
    id: 17,
    name: "客西馬尼園",
    englishName: "Gethsemane",
    category: "第三章：受難與復活",
    role: "苦杯的順服",
    archaeology: "「客西馬尼」意為「榨油坊」。現存橄欖樹根系可能延續古代園區，附近亦發現古代榨油設施遺跡。橄欖被壓榨成油的過程，生動地象徵了耶穌在此處經歷的極度屬靈與心理重壓，如同被榨油機壓榨般流出如血點的汗水。",
    description: "在被賣的那一夜，耶穌如同被放入榨油機般，在極度驚恐與傷痛中禱告，汗如大血點滴下。面對神的忿怒之杯，祂的人性發出掙扎，但最終選擇順服：「不要成就我的意思，只要成就你的意思。」救贖的代價，是在意志上完全的破碎與降服，獨自承擔了世界的罪孽。",
    bibleRef: "馬太福音 26:39",
    location: { lat: 31.7793, lng: 35.2397 },
    archaeoLink: "https://en.wikipedia.org/wiki/Gethsemane"
  },
  {
    id: 18,
    name: "雞鳴堂/該亞法府邸",
    englishName: "House of Caiaphas",
    category: "第三章：受難與復活",
    role: "被背叛與審判",
    images: ["18.jpg", "18_1.jpg"], 
    archaeology: "聖彼得雞鳴堂是一座羅馬天主教教堂，人們認為這裡是該亞法宮殿的所在地，在雞鳴堂地下發現的岩石地牢 (Sacred Pit)，是一個深邃的囚室，只能從頂部吊入。傳統認為考古顯示此類岩石地牢符合當時拘禁用途。",
    description: "在這裡，耶穌經歷了雙重的痛苦：宗教領袖的非法審判與羞辱，以及愛徒彼得的三次不認主。當雞叫的時候，主轉過身來看彼得。那一眼充滿了憂傷卻也包含赦免。耶穌孤獨地被囚在黑暗的地牢中，被朋友離棄，被體制定罪，為了讓我們能被神接納。",
    bibleRef: "路加福音 22:61",
    location: { lat: 31.7710, lng: 35.2317 },
    archaeoLink: "https://en.wikipedia.org/wiki/Church_of_Saint_Peter_in_Gallicantu"
  },
  {
    id: 19,
    name: "錫安修女院地下",
    englishName: "Convent of the Sisters of Zion",
    category: "第三章：受難與復活",
    role: "無罪被定罪",
    archaeology: "在錫安修女院地下的羅馬石板路 (Lithostrotos) 上，刻有羅馬士兵玩的「國王遊戲」棋盤。雖然現代考古多認為這層鋪石屬於第二世紀哈德良時期的建設，並非耶穌受審的實際地點，但石板上刻有的遊戲棋盤，有助於理解士兵戲弄行為的文化背景。",
    description: "羅馬巡撫彼拉多雖然查不出耶穌有什麼罪，卻為了政治妥協而洗手，將無罪的主交給群眾。耶穌在此被鞭打、戲弄，背負著莫須有的罪名。這是人類司法最黑暗的時刻，卻是神公義彰顯的開始——無罪的代替有罪的受刑罰，使我們這些有罪的能得稱為義。",
    bibleRef: "約翰福音 19:13",
    location: { lat: 31.7803, lng: 35.2333 },
    archaeoLink: "https://www.seetheholyland.net/tag/lithostrotos/"
  },
  {
    id: 20,
    name: "各各他山",
    englishName: "Golgotha / Calvary",
    category: "第三章：受難與復活",
    role: "成了",
    archaeology: "根據近期與過去的考古研究，聖墓教堂所在地原為城牆外的採石場，並在第一世紀被用作墓地（包括岩床與墓穴遺跡）。這樣的地理與墓葬證據與希伯來書「城門外受苦」的描述一致，也符合羅馬時期在城外處刑後就近埋葬的歷史慣例。",
    description: "在這裡，天地的主被掛在木頭上。耶穌在極度的痛苦中喊出「成了！」，殿裡的幔子從上到下裂為兩半。這不是失敗的呼喊，而是勝利的宣告。贖罪的祭物已獻上，神與人之間的阻隔已被除去。十字架從羞辱的刑具，轉變為神愛世人最榮耀的記號。",
    bibleRef: "約翰福音 19:30",
    location: { lat: 31.7784, lng: 35.2296 },
    archaeoLink: "https://www.catholicnewsagency.com/news/263377/ancient-quarry-under-holy-sepulcher-yields-new-clues-in-ongoing-excavation"
  },
  {
    id: 21,
    name: "花園塚",
    englishName: "The Garden Tomb",
    category: "第三章：受難與復活",
    role: "空墳墓",
    images: ["21.jpg", "21_1.jpg"], 
    archaeology: "花園塚提供了一個極佳的視覺場景：一個位於花園中、岩石鑿出的財主式墳墓，門口有滾石槽，且鄰近一個外形酷似骷髏的山丘。儘管其墓穴年代在考古上存在爭議，但此地在空間配置與視覺元素上高度貼近福音書的敘事描述，因此常被用作幫助朝聖者具體想像復活清晨「空墳墓」的場景。",
    description: "安息日過後，婦女們來到墳墓前，卻發現石頭滾開了。天使宣告：「祂不在這裡，照祂所說的，已經復活了。」空墳墓是基督教信仰的基石。死亡的權勢被粉碎，耶穌成為初熟的果子。這不僅是歷史的奇蹟，更是給所有信徒的永恆盼望——死亡不是終點，而是通往永生的門。",
    bibleRef: "馬太福音 28:6",
    location: { lat: 31.7839, lng: 35.2302 },
    archaeoLink: "https://www.bibleplaces.com/gardentomb/"
  },

  // --- 第四章：傳揚與終局 ---
  {
    id: 22,
    name: "俄斐勒",
    englishName: "Ophel",
    category: "第四章：傳揚與終局",
    role: "教會的誕生",
    images: ["22.jpg", "22_1.jpg"],
    archaeology: "考古挖掘顯示，聖殿山南側的 Ophel 區域 在第二聖殿時期是一處重要的公共活動與朝聖緩衝地帶，擁有寬闊的街道、穩定的水利系統，並密集分布多座禮儀浴池（mikvaot）。這樣的空間配置與設施規模，使《使徒行傳 2:41》所描述五旬節當天大量人群同時接受洗禮，在考古與空間條件上屬高度可行的歷史場景。",
    description: "耶穌復活升天後，門徒聚集在耶路撒冷。五旬節那天，聖靈澆灌下來，彼得就在這些階梯附近向聚集的猶太人高聲講道。那一天，三千人悔改受洗。教會在此誕生，不再侷限於一個民族或一座建築，而是聖靈內住在每一個信徒心中，救贖的洪流開始向外湧流。",
    bibleRef: "使徒行傳 2:41",
    location: { lat: 31.7749, lng: 35.2358 },
    archaeoLink: "https://www.biblewalks.com/ophel/"
  },
  {
    id: 23,
    name: "約帕",
    englishName: "Joppa",
    category: "第四章：傳揚與終局",
    role: "打破隔閡",
    images: ["23.jpg", "23_1.jpg"],
    archaeology: "在約帕古城的海邊有一處傳統上標示為「硝皮匠西門」的住處，這一地點是基督教傳統上的定位。古代製革業確實因需要大量水且常被猶太社會視為不潔，往往聚集在城市低洼或水邊區域。",
    description: "彼得住在一個視為不潔的硝皮匠家中，在房頂禱告時看見異象：一塊大布降下，裡面裝滿各樣不潔的動物，神說：「神所潔淨的，你不可當作俗物。」這個異象打破了彼得心中根深蒂固的潔淨禮儀觀念，預備他去接納外邦人哥尼流。救贖不僅是靈魂的拯救，更是文化與偏見的拆毀。",
    bibleRef: "使徒行傳 11:18",
    location: { lat: 32.0545, lng: 34.7511 },
    archaeoLink: "https://en.wikipedia.org/wiki/Simon_the_Tanner_(New_Testament)"
  },
  {
    id: 24,
    name: "凱撒利亞",
    englishName: "Caesarea Maritima",
    category: "第四章：傳揚與終局",
    role: "外邦人的五旬節",
    images: ["24.jpg", "24_1.jpg", "24_2.jpg"],
    archaeology: "這座城市充滿了羅馬式建築：圓形劇場、神廟、皇宮。它是羅馬巡撫的駐地（出土了彼拉多石碑）和羅馬軍隊的總部。這樣的考古背景解釋了為什麼羅馬百夫長哥尼流會居住於此，以及彼得進入此地所代表的「跨越文化與種族界線」的巨大意義。",
    description: "彼得在此違背猶太傳統，進入羅馬百夫長哥尼流的家。當他講道時，聖靈降在一切聽道的外邦人身上，如同五旬節一樣。彼得驚嘆：「神是不偏待人的！」這標誌著救恩歷史的重大轉折——福音正式突破種族藩籬，臨到外邦世界，神救贖的計畫展現出普世的胸懷。",
    bibleRef: "使徒行傳 10:45",
    location: { lat: 32.5013, lng: 34.8922 },
    archaeoLink: "https://madainproject.com/caesarea_maritima"
  },
  {
    id: 25,
    name: "亞略巴古",
    englishName: "Areopagus",
    category: "第四章：傳揚與終局",
    role: "護教與對話",
    images: ["25.jpg", "25_1.jpg"],
    archaeology: "亞略巴古（戰神山）是雅典衛城對面的一座岩石山丘，雅典重要的審議與思想辯論機構所在地。站在這裡，可以清楚仰望對面衛城上宏偉的帕德嫩神廟（雅典娜神廟）。這種「滿城偶像」的視覺衝擊，為保羅在此發表的「未識之神」講道提供了最生動的現場背景。",
    description: "面對崇尚智慧的希臘哲學家，保羅沒有引用舊約聖經，而是敏銳地從「未識之神」的祭壇切入，宣告創造天地的主宰不住人手所造的殿。這是一場精彩的跨文化護教。救贖的真理挑戰了人類的驕傲與智慧，宣告神現在吩咐各處的人都要悔改，因為祂已設立耶穌作審判天下的主。",
    bibleRef: "使徒行傳 17:31",
    location: { lat: 37.9724, lng: 23.7232 },
    archaeoLink: "https://en.wikipedia.org/wiki/Areopagus"
  },
  {
    id: 26,
    name: "哥林多",
    englishName: "Corinth",
    category: "第四章：傳揚與終局",
    role: "軟弱中的能力",
    images: ["26.jpg", "26_1.jpg"],
    archaeology: "哥林多保存的 Bema（審判座）遺跡，是古代哥林多公開審理案件的場所，普遍被認為是《使徒行傳》所記保羅被帶到省長迦流面前受審的歷史背景地點。此外，哥林多出土的著名「Erastus inscription」鋪路石，記載一位名為以拉都的市政官自費鋪設道路，與《羅馬書 16:23》所提到的管銀庫以拉都在姓名、身分與社會階層上高度一致，為新約中教會成員橫跨不同社會階層的歷史情境，提供了極具說服力的考古背景。",
    description: "來到這座充斥著商業繁榮與道德敗壞的城市，保羅說自己「又軟弱，又懼怕，又甚戰兢」。但主在異象中鼓勵他：「不要怕，只管講...在這城裡我有許多的百姓。」神的大能是在人的軟弱上顯得完全。哥林多教會的建立，證明了福音能改變最世俗化的人心，將他們洗淨成聖。",
    bibleRef: "哥林多後書 12:9",
    location: { lat: 37.9069, lng: 22.8789 },
    archaeoLink: "https://bibleplaces.com/corinth/"
  },
  {
    id: 27,
    name: "以弗所",
    englishName: "Ephesus",
    category: "第四章：傳揚與終局",
    role: "真理的得勝",
    images: ["27.jpg", "27_1.jpg"],
    archaeology: "以弗所出土的宏偉大劇場，可容納約 2–2.5 萬人，是羅馬時期城市公共集會的主要場所，普遍被認為是《使徒行傳》所記銀匠底米丟煽動群眾、引發騷亂的歷史背景地點。此外，古代世界七大奇蹟之一的「亞底米神廟」（現僅存地基）曾是當地偶像經濟的核心。",
    description: "保羅在以弗所停留約三年之久，期間甚至使用推喇奴的學房，每日與人辯論、教導。福音的廣泛傳播，使許多人離棄偶像崇拜，對當地以亞底米崇拜為核心的宗教與經濟體系構成實質衝擊，最終引發銀匠底米丟所煽動的群眾騷亂。以弗所教會後來成為亞細亞地區的重要宣教中心，也與 提摩太 及 約翰 的事奉傳統密切相關。",
    bibleRef: "使徒行傳 19",
    location: { lat: 37.9411, lng: 27.3415 },
    archaeoLink: "https://bibleplaces.com/ephesus/"
  },
  {
    id: 28,
    name: "羅馬亞皮亞古道",
    englishName: "Appian Way",
    category: "第四章：傳揚與終局",
    role: "直到地極",
    images: ["28.jpg", "28_1.jpg"],
    archaeology: "亞皮亞古道至今仍保留著羅馬時期的原始玄武岩鋪石，道路兩旁林立著羅馬權貴的墓塚，展現出這條道路作為帝國軍事、行政與權力象徵的歷史角色。根據《使徒行傳》28 章的記載，保羅以囚犯身分抵達義大利，並在位於亞皮亞古道沿線的亞比烏市集與三館受到弟兄迎接，顯示他極可能沿著這條帝國幹道進入羅馬。",
    description: "保羅最終以囚犯的身份，沿著這條路走完前往羅馬的最後一段旅程。雖然被鎖鍊捆鎖，但神的道卻不被捆鎖。在這條象徵帝國權力的道路上，一位看似軟弱的使徒，正將顛覆世界的福音帶入帝國的心臟。救贖的故事在此展現了其不可阻擋的生命力，直到地極。",
    bibleRef: "使徒行傳 28:15",
    location: { lat: 41.8589, lng: 12.5353 },
    archaeoLink: "https://en.wikipedia.org/wiki/Appian_Way"
  },
  {
    id: 29,
    name: "老底嘉",
    englishName: "Laodicea",
    category: "第四章：傳揚與終局",
    role: "不冷不熱的警戒",
    images: ["29.jpg", "29_1.jpg"],
    archaeology: "老底嘉的考古研究顯示，該城缺乏天然水源，必須透過長距離引水系統將水輸入城內。來自希拉波立一帶的溫泉水在長途輸送後，抵達老底嘉時已變得不冷不熱，且富含礦物質；考古挖掘出的陶製水管內壁，至今仍可見厚重的鈣化沉澱。",
    description: "耶穌責備老底嘉教會「不冷不熱」，常被理解為呼應當地溫而令人作嘔的水源經驗。面對他們自以為富足（黑羊毛、眼藥、金融），主反而呼召他們向祂得著真正的屬靈富足，提醒教會：物質的滿足若缺乏警醒，反而使人對主失去需要。",
    bibleRef: "啟示錄 3:20",
    location: { lat: 37.8347, lng: 29.1097 },
    archaeoLink: "https://bibleplaces.com/laodicea/"
  },
  {
    id: 30,
    name: "拔摩島",
    englishName: "Patmos",
    category: "第四章：傳揚與終局",
    role: "榮耀的終局",
    images: ["30.jpg", "30_1.jpg"], 
    archaeology: "拔摩島上的「啟示錄洞穴」在基督教傳統中被認為是使徒約翰被流放期間居住並領受啟示的地方。拔摩是一座孤懸海外、資源貧乏的火山島，符合羅馬帝國將政治或宗教異議者流放至邊緣地帶的做法。",
    description: "年老的約翰被流放至此，看似孤獨絕望，卻在此看見了人類歷史最宏偉的終局——新天新地。神要擦去一切眼淚，不再有死亡與悲哀。從創世記的伊甸園失落，到啟示錄的聖城降臨，救贖的歷史在此畫上完美的句點。這是神給所有在患難中忍耐之人的榮耀應許：主必快來。",
    bibleRef: "啟示錄 21:1",
    location: { lat: 37.3145, lng: 26.5447 },
    archaeoLink: "https://en.wikipedia.org/wiki/Cave_of_the_Apocalypse"
  }
];

const chapters = {
    "第一章：應許與預備": {
        id: "chapter1",
        title: "一、應許與預備",
        intro: "從亞伯拉罕蒙召離開本地本族，到以色列民族在曠野中被塑造，聖經記錄了一段漫長而耐心的預備歷程。神在歷史與地理中一步步實現祂的應許，設立盟約、頒布律法、引導百姓進入應許之地，並逐漸預備王權與聖城的形成。這一切並非零散事件，而是為彌賽亞的到來鋪陳背景，使救贖計畫在具體的時間與空間中逐步成形。"
    },
    "第二章：道成肉身": {
        id: "chapter2",
        title: "二、道成肉身",
        intro: "在歷史的關鍵時刻，神的話成了肉身，進入人類真實的世界。耶穌行走於加利利與猶太地，在城鎮與鄉村中教導、醫治、呼召門徒，宣告並彰顯神國的臨在。祂的事奉並非抽象的屬靈理念，而是在具體地點、真實人群中展開，顯明神親自進入人類歷史，與人同住。"
    },
    "第三章：受難與復活": {
        id: "chapter3",
        title: "三、受難與復活",
        intro: "耶穌的受難並非偶發的悲劇，而是神救贖計畫的核心時刻。從客西馬尼園的掙扎，到耶路撒冷城內外的審判與十字架，救恩在歷史現場中被完成。空墳墓的見證向世人宣告：死亡不再是終局，復活成為新的起點。這不是神話，而是改變門徒、翻轉世界歷史的關鍵事件。"
    },
    "第四章：傳揚與終局": {
        id: "chapter4",
        title: "四、傳揚與終局",
        intro: "復活的主差遣門徒，福音從耶路撒冷開始，迅速傳向猶太、撒馬利亞，直到地極。聖靈降臨，使教會在城市、港口與帝國道路上成長，突破文化、族群與權力的界線。最終，使徒約翰在拔摩島領受異象，將歷史的目光指向終局：神必更新萬有，新天新地不再有死亡與眼淚。救贖的故事，從應許開始，也在榮耀中完成。"
    }
};