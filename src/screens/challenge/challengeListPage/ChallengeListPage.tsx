import React from "react";
import SimpleTable from "../../../components/Tables/SimpleTable";
import "./ChallengeListPage.scss";

const ChallengeListPage = () => {
  const items = [
    { name: "addition", popularly: 1, rate: 3, level: 1 },
    { name: "addition1", popularly: 1, rate: 3, level: 1 },
    { name: "addition2", popularly: 1, rate: 3, level: 1 },
    { name: "addition3", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition5", popularly: 1, rate: 3, level: 1 },
    { name: "addition6", popularly: 1, rate: 3, level: 1 },
    { name: "addition7", popularly: 1, rate: 3, level: 1 },
    { name: "addition8", popularly: 1, rate: 3, level: 1 },
    { name: "addition9", popularly: 1, rate: 3, level: 1 },
    { name: "addition11", popularly: 1, rate: 3, level: 1 },
    { name: "addition12", popularly: 1, rate: 3, level: 1 },
    { name: "addition13", popularly: 1, rate: 3, level: 1 },
    { name: "addition14", popularly: 1, rate: 3, level: 1 },
    { name: "addition15", popularly: 1, rate: 3, level: 1 },
    { name: "addition", popularly: 1, rate: 3, level: 1 },
    { name: "addition1", popularly: 1, rate: 3, level: 1 },
    { name: "addition2", popularly: 1, rate: 3, level: 1 },
    { name: "addition3", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition5", popularly: 1, rate: 3, level: 1 },
    { name: "addition6", popularly: 1, rate: 3, level: 1 },
    { name: "addition7", popularly: 1, rate: 3, level: 1 },
    { name: "addition8", popularly: 1, rate: 3, level: 1 },
    { name: "addition9", popularly: 1, rate: 3, level: 1 },
    { name: "addition11", popularly: 1, rate: 3, level: 1 },
    { name: "addition12", popularly: 1, rate: 3, level: 1 },
    { name: "addition13", popularly: 1, rate: 3, level: 1 },
    { name: "addition14", popularly: 1, rate: 3, level: 1 },
    { name: "addition15", popularly: 1, rate: 3, level: 1 },
    { name: "addition", popularly: 1, rate: 3, level: 1 },
    { name: "addition1", popularly: 1, rate: 3, level: 1 },
    { name: "addition2", popularly: 1, rate: 3, level: 1 },
    { name: "addition3", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition5", popularly: 1, rate: 3, level: 1 },
    { name: "addition6", popularly: 1, rate: 3, level: 1 },
    { name: "addition7", popularly: 1, rate: 3, level: 1 },
    { name: "addition8", popularly: 1, rate: 3, level: 1 },
    { name: "addition9", popularly: 1, rate: 3, level: 1 },
    { name: "addition11", popularly: 1, rate: 3, level: 1 },
    { name: "addition12", popularly: 1, rate: 3, level: 1 },
    { name: "addition13", popularly: 1, rate: 3, level: 1 },
    { name: "addition14", popularly: 1, rate: 3, level: 1 },
    { name: "addition15", popularly: 1, rate: 3, level: 1 },
    { name: "addition", popularly: 1, rate: 3, level: 1 },
    { name: "addition1", popularly: 1, rate: 3, level: 1 },
    { name: "addition2", popularly: 1, rate: 3, level: 1 },
    { name: "addition3", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition5", popularly: 1, rate: 3, level: 1 },
    { name: "addition6", popularly: 1, rate: 3, level: 1 },
    { name: "addition7", popularly: 1, rate: 3, level: 1 },
    { name: "addition8", popularly: 1, rate: 3, level: 1 },
    { name: "addition9", popularly: 1, rate: 3, level: 1 },
    { name: "addition11", popularly: 1, rate: 3, level: 1 },
    { name: "addition12", popularly: 1, rate: 3, level: 1 },
    { name: "addition13", popularly: 1, rate: 3, level: 1 },
    { name: "addition14", popularly: 1, rate: 3, level: 1 },
    { name: "addition15", popularly: 1, rate: 3, level: 1 },
    { name: "addition", popularly: 1, rate: 3, level: 1 },
    { name: "addition1", popularly: 1, rate: 3, level: 1 },
    { name: "addition2", popularly: 1, rate: 3, level: 1 },
    { name: "addition3", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition5", popularly: 1, rate: 3, level: 1 },
    { name: "addition6", popularly: 1, rate: 3, level: 1 },
    { name: "addition7", popularly: 1, rate: 3, level: 1 },
    { name: "addition8", popularly: 1, rate: 3, level: 1 },
    { name: "addition9", popularly: 1, rate: 3, level: 1 },
    { name: "addition11", popularly: 1, rate: 3, level: 1 },
    { name: "addition12", popularly: 1, rate: 3, level: 1 },
    { name: "addition13", popularly: 1, rate: 3, level: 1 },
    { name: "addition14", popularly: 1, rate: 3, level: 1 },
    { name: "addition15", popularly: 1, rate: 3, level: 1 },
    { name: "addition", popularly: 1, rate: 3, level: 1 },
    { name: "addition1", popularly: 1, rate: 3, level: 1 },
    { name: "addition2", popularly: 1, rate: 3, level: 1 },
    { name: "addition3", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition4", popularly: 1, rate: 3, level: 1 },
    { name: "addition5", popularly: 1, rate: 3, level: 1 },
    { name: "addition6", popularly: 1, rate: 3, level: 1 },
    { name: "addition7", popularly: 1, rate: 3, level: 1 },
    { name: "addition8", popularly: 1, rate: 3, level: 1 },
    { name: "addition9", popularly: 1, rate: 3, level: 1 },
    { name: "addition11", popularly: 1, rate: 3, level: 1 },
    { name: "addition12", popularly: 1, rate: 3, level: 1 },
    { name: "addition13", popularly: 1, rate: 3, level: 1 },
    { name: "addition14", popularly: 1, rate: 3, level: 1 },
    { name: "addition15", popularly: 1, rate: 3, level: 1 }
  ];
  return (
    <div>
      <div className="challenge-list-title">Available Challenges</div>
      <div>
        <SimpleTable items={items} />
      </div>
    </div>
  );
};

export default ChallengeListPage;
