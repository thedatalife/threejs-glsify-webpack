uniform float p1x;
uniform float p1y;
uniform float p1z;
uniform float height;
uniform float width;
uniform float depth;
uniform float sin;
uniform float cos;

varying vec2 vUv;
varying vec3 vPosition;

void main(void)
{
    vUv = uv;

    // Scale
    float scaledX = position.x * width;
    float scaledY = position.y * height;
    float scaledZ = position.z * depth;

    // Rotation + Position
    vPosition.y = scaledY + p1z;
    vPosition.x = scaledX * cos - scaledZ * sin + p1x;
    vPosition.z = scaledZ * cos + scaledX * sin + p1y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}
