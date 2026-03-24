[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold](../README.md) / setCircularSegments

# Function: setCircularSegments()

> **setCircularSegments**(`segments`): `void`

Defined in: manifold-3d/manifold.d.ts:1452

Sets the default number of circular segments for the
[CrossSection.circle](../classes/CrossSection.md#circle), [Manifold.cylinder](../classes/Manifold.md#cylinder), [Manifold.sphere](../classes/Manifold.md#sphere), and
[Manifold.revolve](../classes/Manifold.md#revolve) constructors. Overrides the edge length and angle
constraints and sets the number of segments to exactly this value.

## Parameters

### segments

`number`

Number of circular segments. Default is 0, meaning no
constraint is applied.

## Returns

`void`
