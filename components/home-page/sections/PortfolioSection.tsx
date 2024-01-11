"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import Link from "next/link";
import { items } from "@/data/portfolio";

const PortfolioSection = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="title-style-five text-center text-lg-start md-mb-20">
            <h2 className="main-title font-recoleta fw-500 tx-dark">
              My
              <span className="d-inline-block position-relative">
                Recent
                <span
                  className="mark-bg"
                  style={{ backgroundColor: "#D9F5F8" }}
                />
              </span>
              Work.
            </h2>
          </div>
        </div>
      </div>
      <div className="grid-2column pt-50 lg-pt-20 row">
        <Gallery>
          {items.map((item, index) => (
            <div
              className={`isotop-item ${item.category} col-lg-6 col-md-6`}
              key={index}
            >
              <div className="portfolio-block-one mt-40 xs-mt-30">
                <div className="img-meta">
                  <Image
                    width={640}
                    height={666}
                    src={item.image as string}
                    alt={item.name as string}
                    className="w-100"
                  />
                </div>
                <Link
                  href={`/portfolio/${item.id}`}
                  className="title tran3s d-flex flex-column justify-content-center align-items-center"
                >
                  <span className="tag">{item.tag}</span>

                  <span className="pj-name tran3s fw-500">{item.name}</span>
                </Link>
                <div className="hover-state tran3s">
                  <Item
                    original={item.image}
                    thumbnail={item.image}
                    width={800}
                    height={833}
                  >
                    {({ ref, open }) => (
                      <span
                        role="button"
                        title="Click for large view"
                        className="fancybox tran3s"
                        ref={ref}
                        onClick={open}
                      >
                        <i className="bi bi-plus" />
                      </span>
                    )}
                  </Item>
                </div>
              </div>
            </div>
          ))}
        </Gallery>
      </div>
    </div>
  );
};

export default PortfolioSection;
