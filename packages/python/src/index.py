import os
import json

dist_path = os.path.join(os.path.dirname(__file__), "../../../dist")

config_path = os.path.join(dist_path, "config.json")
with open(config_path) as f:
  config = json.load(f)

print(config)

nodes_path = os.path.join(dist_path, "nodes.json")
with open(nodes_path) as f:
  nodes = json.load(f)

print(nodes)