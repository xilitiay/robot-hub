// 数据库建表与种子导入 / DB schema & seeding
const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const fs = require('fs');
const robots = require('../data/robots.js');
const robotsExtra = require('../data/robots_extra.js');
const { categories, autonomyLevels, countries, continents } = require('../data/meta.js');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'robot-hub.db');

function initDb() {
  const db = new DatabaseSync(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS robots (
      id TEXT PRIMARY KEY,
      brand TEXT, brandZh TEXT, model TEXT,
      category TEXT, autonomy TEXT, country TEXT,
      payload REAL, reach REAL, dof INTEGER, weight REAL,
      price REAL, priceText TEXT, year INTEGER,
      descEn TEXT, descZh TEXT, apps TEXT,
      views INTEGER DEFAULT 0, featured INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS rfq (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      robotId TEXT, name TEXT, company TEXT, email TEXT,
      phone TEXT, message TEXT, createdAt TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_robots_cat ON robots(category);
    CREATE INDEX IF NOT EXISTS idx_robots_brand ON robots(brand);
  `);

  const count = db.prepare('SELECT COUNT(*) AS c FROM robots').get().c;
  if (count === 0) {
    // merge both datasets, de-duplicating by id (first occurrence wins)
    const seen = new Set();
    const allRobots = [];
    for (const r of robots.concat(robotsExtra)) {
      if (seen.has(r.id)) continue;
      seen.add(r.id);
      allRobots.push(r);
    }
    const ins = db.prepare(`INSERT INTO robots
      (id,brand,brandZh,model,category,autonomy,country,payload,reach,dof,weight,price,priceText,year,descEn,descZh,apps,featured)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
    let i = 0;
    for (const r of allRobots) {
      ins.run(r.id, r.brand, r.brandZh, r.model, r.category, r.autonomy, r.country,
        r.payload, r.reach, r.dof, r.weight, r.price, r.priceText, r.year,
        r.descEn, r.descZh, JSON.stringify(r.apps || []), (i % 7 === 0 ? 1 : 0));
      i++;
    }
    console.log(`[db] seeded ${allRobots.length} robots`);
  }
  return db;
}

module.exports = { initDb, DB_PATH, categories, autonomyLevels, countries, continents };
