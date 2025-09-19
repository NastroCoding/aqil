import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}></OrbitingCircles>
      <OrbitingCircles
        iconSize={30}
        radius={100}
        reverse
        speed={2}
      ></OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
