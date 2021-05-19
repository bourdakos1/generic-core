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

const properties: NodeProperty[] = [
  {
    id: "runtime_image",
    title: "Runtime Image",
    description: "Container image used as execution environment",
    type: "string",
    enum: [],
  },
  {
    id: "cpu",
    title: "CPU",
    description:
      "For CPU-intensive workloads, you can use more than 1 CPU (e.g. 1.5).",
    type: "number",
    minimum: 1,
    maximum: 99,
  },
  {
    id: "gpu",
    title: "GPU",
    description: "For GPU-intensive workloads, you can use GPUs.",
    type: "integer",
    minimum: 0,
    maximum: 99,
  },
  {
    id: "memory",
    title: "RAM(GB)",
    description: "The total amount of RAM specified.",
    type: "number",
    minimum: 0,
    exclusiveMinimum: true,
  },
  {
    id: "dependencies",
    title: "File Dependencies",
    description:
      "Local file dependencies that need to be copied to remote execution environment.",
    type: "array",
    items: {
      type: "string",
      format: "file",
      placeholder: "*.py",
    },
  },
  {
    id: "include_subdirectories",
    title: "Include Subdirectories in Dependencies",
    description: "May increase submission time",
    type: "boolean",
  },
  {
    id: "env_vars",
    title: "Environment Variables",
    description:
      "Environment variables to be set on the execution environment.",
    type: "array",
    items: {
      type: "string",
      placeholder: "ENV_VAR=value",
      pattern: "[a-zA-Z_][a-zA-Z0-9_]*=.*",
    },
  },
  {
    id: "outputs",
    title: "Output Files",
    description:
      "Files generated during execution that will become available to all subsequent pipeline steps.",
    type: "array",
    items: {
      type: "string",
      format: "file",
      placeholder: "*.csv",
    },
  },
];

export const nodes: NodeSchema[] = [
  {
    op: "execute-notebook-node",
    label: "Notebook",
    description: "Notebook file",
    type: "file",
    extensions: [".ipynb"],
    properties: properties,
  },
  {
    op: "execute-python-node",
    label: "Python",
    description: "Python file",
    type: "file",
    extensions: [".py"],
    language: "python",
    properties: properties,
  },
  {
    op: "execute-r-node",
    label: "R Script",
    description: "R file",
    type: "file",
    extensions: [".r"],
    language: "r",
    properties: properties,
  },
];
