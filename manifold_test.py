import manifold3d
import trimesh

# 创建模型
a = manifold3d.Manifold.cube([3,3,3])
b = manifold3d.Manifold.sphere(radius=2)

# 运算
res = a - b  # 挖洞

vertices = res.vertices  # 正确！不是 vert
faces = res.faces        # 正确！不是 face

# 转 trimesh 并导出
trimesh.Trimesh(vertices=vertices, faces=faces).export("test.stl")

# 可选：直接预览
# trimesh.Trimesh(vertices=mesh.vert, faces=mesh.face).show()
