// 类目与品牌元数据（中英双语） / Categories & brand metadata (bilingual)
const categories = [
  { id: 'industrial',   en: 'Industrial Robots',      zh: '工业机器人',   icon: '🦾', desc_en: 'Articulated, SCARA, Delta & gantry arms for factory automation.', desc_zh: '多关节、SCARA、Delta 并联与桁架机械臂，用于工厂自动化。' },
  { id: 'cobot',        en: 'Collaborative Robots',   zh: '协作机器人',   icon: '🤝', desc_en: 'Safe human-robot collaboration arms.', desc_zh: '可与人协同作业的安全型机械臂。' },
  { id: 'amr',          en: 'Mobile Robots (AGV/AMR)',zh: '移动机器人',   icon: '🛞', desc_en: 'Autonomous & guided mobile robots for intralogistics.', desc_zh: '用于厂内物流的自主/引导式移动机器人。' },
  { id: 'humanoid',     en: 'Humanoid Robots',        zh: '人形机器人',   icon: '🧍', desc_en: 'Bipedal general-purpose embodied robots.', desc_zh: '双足通用型具身智能机器人。' },
  { id: 'quadruped',    en: 'Quadruped Robots',       zh: '四足机器人',   icon: '🐕', desc_en: 'Legged robot dogs for inspection & research.', desc_zh: '用于巡检与科研的四足机器狗。' },
  { id: 'medical',      en: 'Medical Robots',         zh: '医疗机器人',   icon: '🏥', desc_en: 'Surgical, orthopedic & rehabilitation robots.', desc_zh: '手术、骨科与康复机器人。' },
  { id: 'service',      en: 'Commercial Service',     zh: '商用服务机器人', icon: '🛎️', desc_en: 'Delivery, cleaning, reception & guide robots.', desc_zh: '配送、清洁、迎宾与导览机器人。' },
  { id: 'consumer',     en: 'Consumer Robots',        zh: '家用消费机器人', icon: '🏠', desc_en: 'Vacuum, mower, pool & companion robots for home.', desc_zh: '家用扫地、割草、泳池与陪伴机器人。' },
  { id: 'agricultural', en: 'Agricultural Robots',    zh: '农业机器人',   icon: '🌾', desc_en: 'Drones, harvesting & precision-farming robots.', desc_zh: '农业无人机、采收与精准农业机器人。' },
  { id: 'special',      en: 'Special / Field Robots',  zh: '特种机器人',   icon: '🚁', desc_en: 'Drones, underwater, inspection, firefighting & EOD.', desc_zh: '无人机、水下、巡检、消防与排爆机器人。' },
  { id: 'logistics',    en: 'Logistics & Warehouse',  zh: '物流仓储机器人', icon: '📦', desc_en: 'Goods-to-person, sorting & forklift robots.', desc_zh: '货到人、分拣与无人叉车机器人。' }
];

const autonomyLevels = [
  { id: 'fully-autonomous', en: 'Fully Autonomous', zh: '完全自主' },
  { id: 'semi-autonomous',  en: 'Semi-Autonomous',  zh: '半自主' },
  { id: 'programmable',     en: 'Programmable',      zh: '可编程' },
  { id: 'teleoperated',     en: 'Teleoperated',      zh: '遥控操作' }
];

const countries = {
  JP: { en: 'Japan', zh: '日本', flag: '🇯🇵', continent: 'asia' },
  CN: { en: 'China', zh: '中国', flag: '🇨🇳', continent: 'asia' },
  US: { en: 'United States', zh: '美国', flag: '🇺🇸', continent: 'americas' },
  DE: { en: 'Germany', zh: '德国', flag: '🇩🇪', continent: 'europe' },
  CH: { en: 'Switzerland', zh: '瑞士', flag: '🇨🇭', continent: 'europe' },
  SE: { en: 'Sweden', zh: '瑞典', flag: '🇸🇪', continent: 'europe' },
  DK: { en: 'Denmark', zh: '丹麦', flag: '🇩🇰', continent: 'europe' },
  KR: { en: 'South Korea', zh: '韩国', flag: '🇰🇷', continent: 'asia' },
  IT: { en: 'Italy', zh: '意大利', flag: '🇮🇹', continent: 'europe' },
  NL: { en: 'Netherlands', zh: '荷兰', flag: '🇳🇱', continent: 'europe' },
  NO: { en: 'Norway', zh: '挪威', flag: '🇳🇴', continent: 'europe' },
  TW: { en: 'Taiwan, China', zh: '中国台湾', flag: '🇨🇳', continent: 'asia' },
  IL: { en: 'Israel', zh: '以色列', flag: '🇮🇱', continent: 'asia' },
  FR: { en: 'France', zh: '法国', flag: '🇫🇷', continent: 'europe' },
  PL: { en: 'Poland', zh: '波兰', flag: '🇵🇱', continent: 'europe' },
  GB: { en: 'United Kingdom', zh: '英国', flag: '🇬🇧', continent: 'europe' },
  CA: { en: 'Canada', zh: '加拿大', flag: '🇨🇦', continent: 'americas' },
  SG: { en: 'Singapore', zh: '新加坡', flag: '🇸🇬', continent: 'asia' },
  ES: { en: 'Spain', zh: '西班牙', flag: '🇪🇸', continent: 'europe' },
  AT: { en: 'Austria', zh: '奥地利', flag: '🇦🇹', continent: 'europe' },
  AU: { en: 'Australia', zh: '澳大利亚', flag: '🇦🇺', continent: 'oceania' },
  IN: { en: 'India', zh: '印度', flag: '🇮🇳', continent: 'asia' },
  BR: { en: 'Brazil', zh: '巴西', flag: '🇧🇷', continent: 'americas' },
  BE: { en: 'Belgium', zh: '比利时', flag: '🇧🇪', continent: 'europe' },
  FI: { en: 'Finland', zh: '芬兰', flag: '🇫🇮', continent: 'europe' }
};

// 大洲聚合（用于品牌页「按国家分组」的二级导航） / Continents for brand grouping
const continents = {
  asia:     { en: 'Asia',     zh: '亚洲',   flag: '🌏', order: 1 },
  europe:   { en: 'Europe',   zh: '欧洲',   flag: '🌍', order: 2 },
  americas: { en: 'Americas', zh: '美洲',   flag: '🌎', order: 3 },
  oceania:  { en: 'Oceania',  zh: '大洋洲', flag: '🇦🇺', order: 4 }
};

module.exports = { categories, autonomyLevels, countries, continents };
