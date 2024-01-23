import { useRouter } from "next/router";
import PortfolioDetails from "../../components/portfolio/PortfolioDetails";
import { useEffect, useState } from "react";
import { Item, items } from "@/data/portfolio";

const PortfolioDetailsContainer = () => {
  const router = useRouter();
  const [portfolio, setPortfolio] = useState<Item | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const id = router.query.id;

  useEffect(() => {
    const numericId = Number(id);

    if (!id || isNaN(numericId)) {
      setLoading(true);
      return;
    }
    const foundPortfolio = items.find((item) => item.id === numericId);
    setPortfolio(foundPortfolio);
    setLoading(false);
  }, [id]);

  return (
    <>
      {portfolio && (
        <PortfolioDetails
          portfolio={portfolio}
          length={items.length}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default PortfolioDetailsContainer;
