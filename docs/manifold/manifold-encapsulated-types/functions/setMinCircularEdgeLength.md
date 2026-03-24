[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold-encapsulated-types](../README.md) / setMinCircularEdgeLength

# Function: setMinCircularEdgeLength()

> **setMinCircularEdgeLength**(`length`): `void`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:61

Sets a length constraint the default number of circular segments for the
[CrossSection.circle](../classes/CrossSection.md#circle), [Manifold.cylinder](../classes/Manifold.md#cylinder), [Manifold.sphere](../classes/Manifold.md#sphere), and
[Manifold.revolve](../classes/Manifold.md#revolve) constructors. The number of segments will be rounded
up to the nearest factor of four.

## Parameters

### length

`number`

The minimum length of segments. The length will
increase if the the segments hit the minimum angle. Default is 1.0.

## Returns

`void`
