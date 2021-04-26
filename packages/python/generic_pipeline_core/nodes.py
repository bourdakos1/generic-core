import os
import json

try:
    import importlib.resources as pkg_resources
except ImportError:
    # Try backported to PY<37 `importlib_resources`.
    import importlib_resources as pkg_resources

from . import dist


nodes = json.loads(pkg_resources.read_text(dist, 'nodes.json'))

# dist_path = os.path.join(os.path.dirname(__file__), "dist")

# config_path = os.path.join(dist_path, "config.json")
# with open(config_path) as f:
#   config = json.load(f)

# nodes_path = os.path.join(dist_path, "nodes.json")
# with open(nodes_path) as f:
#   nodes = json.load(f)