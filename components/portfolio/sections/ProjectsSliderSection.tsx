import strings from "@/data/strings";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  currentId: number;
  itemsLength: number;
};

const ProjectsSliderSection = ({ currentId, itemsLength }: Props) => {
  const [nextItem, setNextItem] = useState<null | number>(null);
  const [previousItem, setPreviousItem] = useState<null | number>(null);

  useEffect(() => {
    if (currentId < itemsLength) {
      setNextItem(currentId + 1);
    } else {
      setNextItem(null);
    }

    if (currentId > 1) {
      setPreviousItem(currentId - 1);
    } else {
      setPreviousItem(null);
    }
  }, [currentId, itemsLength]);

  console.log(currentId, itemsLength, nextItem, previousItem);

  return (
    <div className="project-pagination m-auto pt-100 lg-pt-50 sm-pt-10">
      <div className="row gx-xxl-5">
        {previousItem && (
          <div className="col-sm-6">
            <div
              className="arrow-block position-relative zn2 mt-20"
              data-aos="fade-right"
            >
              <Image
                src="/images/media/img_92.jpg"
                alt="media"
                className="lazy-img w-100"
                width={920}
                height={600}
              />
              <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                <div className="text-white fw-500 pg-title text-center">
                  {strings.portfolio.projectSliderSection.previous}
                </div>
                <Link
                  href={`/portfolio/${previousItem}`}
                  className="arrow rounded-circle text-center tran3s"
                >
                  <i className="bi bi-arrow-left" />
                </Link>
              </div>
            </div>
          </div>
        )}
        {nextItem && (
          <div className="col-sm-6">
            <div
              className="arrow-block position-relative zn2 mt-20"
              data-aos="fade-left"
            >
              <Image
                src="/images/media/img_93.jpg"
                alt="media"
                className="lazy-img w-100"
                width={820}
                height={600}
              />
              <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
                <div className="text-white fw-500 pg-title text-center">
                  {strings.portfolio.projectSliderSection.next}
                </div>
                <Link
                  href={`/portfolio/${nextItem}`}
                  className="arrow rounded-circle text-center tran3s"
                >
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSliderSection;
