/*
 * Copyright 2018-2021 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from "fs";
import path from "path";

import { config } from "../config";
import { nodes } from "../nodes";

const ICON_FOLDER = path.join(__dirname, "..", "..", "icons");
const DIST_FOLDER = path.join(__dirname, "..", "..", "dist");

function ensureEmptyDist() {
  fs.rmdirSync(DIST_FOLDER, { recursive: true });
  fs.mkdirSync(DIST_FOLDER);
}

function generateConfigJson() {
  fs.writeFileSync(
    path.join(DIST_FOLDER, "config.json"),
    JSON.stringify(config, null, 2)
  );
}

function generateNodesJson() {
  let finalizedNodes = [];
  for (let node of nodes) {
    const icon = fs.readFileSync(path.join(ICON_FOLDER, `${node.op}.svg`), {
      encoding: "utf-8",
    });
    const iconString = `data:image/svg+xml;utf8,${encodeURIComponent(icon)}`;
    finalizedNodes.push({ ...node, icon: iconString });
  }
  fs.writeFileSync(
    path.join(DIST_FOLDER, "nodes.json"),
    JSON.stringify(finalizedNodes, null, 2)
  );
}

ensureEmptyDist();
generateConfigJson();
generateNodesJson();
