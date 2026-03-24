[**manifold-3d**](../../README.md)

***

[manifold-3d](../../README.md) / [manifold-encapsulated-types](../README.md) / setMinCircularAngle

# Function: setMinCircularAngle()

> **setMinCircularAngle**(`angle`): `void`

Defined in: manifold-3d/manifold-encapsulated-types.d.ts:49

Sets an angle constraint the default number of circular segments for the
[CrossSection.circle](../classes/CrossSection.md#circle), [Manifold.cylinder](../classes/Manifold.md#cylinder), [Manifold.sphere](../classes/Manifold.md#sphere), and
[Manifold.revolve](../classes/Manifold.md#revolve) constructors. The number of segments will be rounded
up to the nearest factor of four.

## Parameters

### angle

`number`

The minimum angle in degrees between consecutive segments. The
angle will increase if the the segments hit the minimum edge length.
Default is 10 degrees.

## Returns

`void`
