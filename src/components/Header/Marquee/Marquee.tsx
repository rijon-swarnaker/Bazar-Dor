import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface MarqueePageProps {
  id: string;
  nameBn: string;
  image: string;
  unit: string;
  today: string;

  change: {
    dir: string;
    pct: string;
  };
}

const MarqueePage = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );
  const data: MarqueePageProps[] = await res.json();
  const increase = data.filter((items) =>
    ["up", "down"].includes(items.change.dir),
  );
  console.log(increase);

  return (
    <div className="border-b py-1 border-base-300">
      <MarqueeText direction="right" duration={8}>
        {increase.map((m) => (
          <div key={m.id} className="flex mr-10 gap-2">
            <span>{m.image}</span>
            <span>{m.nameBn}</span>
            <span>
              {m.today} টাকা/
              {m.unit === "kg"
                ? "কেজি"
                : m.unit === "litre"
                  ? "লিটার"
                  : m.unit === "dozen"
                    ? "ডজন"
                    : m.unit}{" "}
            </span>

            <span>
              {m.change.dir === "up" ? (
                <span className="text-red-600">▲ {Number(m.change.pct).toFixed(1)} %</span>
              ) : (
                <span className="text-green-600">▼ {Math.abs(Number(m.change.pct)).toFixed(1)} %</span>
              )}
            </span>
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default MarqueePage;
