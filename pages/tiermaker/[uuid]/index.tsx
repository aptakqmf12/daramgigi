import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { MakerType } from "../../../components/common/maker";

// 이거 근데 router로 받아야함.
interface MakerDetailProps extends MakerType {
  tiers: string[]; // boards
  data: string[];
}

export default function MakerDetail() {
  const route = useRouter();
  const uuid = (route.query.uuid as string) || "";

  useEffect(() => {
    const drag = (e: DragEvent) => {};
    const move = (e: DragEvent) => {};
    const end = (e: DragEvent) => {};
  }, []);

  return (
    <div.wrap>
      <div></div>
      <div>
        <div className="draggable" draggable>
          item1
        </div>
        <div className="draggable" draggable>
          item2
        </div>
      </div>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div``,
};
