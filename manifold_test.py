import manifold3d as manifold
import trimesh
import numpy as np

def manifold_to_trimesh(manifold_obj):
    """Convert a Manifold object to a trimesh object"""
    mesh_data = manifold_obj.to_mesh()
    vertices = np.array(mesh_data.vert_properties)
    faces = np.array(mesh_data.tri_verts)
    return trimesh.Trimesh(vertices=vertices, faces=faces)

# Create shapes
cube = manifold.Manifold.cube([2, 2, 2])
sphere = manifold.Manifold.sphere(1.2, circular_segments=64)

# Position sphere
sphere = sphere.translate([1, 0.5, 0])

# Boolean operations
union = cube + sphere
difference = cube - sphere
intersection = cube ^ sphere

# Convert and export
mesh_union = manifold_to_trimesh(union) 
mesh_union.export('union.stl')

mesh_diff = manifold_to_trimesh(difference)
mesh_diff.export('difference.stl')

print(f"Union: {len(mesh_union.vertices)} vertices, {len(mesh_union.faces)} faces")
print(f"Difference: {len(mesh_diff.vertices)} vertices, {len(mesh_diff.faces)} faces")