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

import { NodeProperty, NodeSchema } from "./models";

const envVars: NodeProperty = {
  id: "env_vars",
  title: "Environment Variables",
  description: "Environment variables to be set on the execution environment.",
  type: "array",
  items: {
    type: "string",
    placeholder: "ENV_VAR=value",
    pattern: "[a-zA-Z_][a-zA-Z0-9_]*=.*",
  },
};

export const nodes: NodeSchema[] = [
  {
    op: "execute-notebook-node",
    label: "Notebook",
    description: "Notebook file",
    type: "file",
    extensions: [".ipynb"],
    properties: [envVars],
  },
  {
    op: "execute-python-node",
    label: "Python",
    description: "Python file",
    type: "file",
    extensions: [".py"],
    language: "python",
    properties: [envVars],
  },
];
