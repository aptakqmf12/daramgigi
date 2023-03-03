import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { MakerType } from "../../../components/common/maker";
import PageContainer from "../../../components/layout/page";
import Wrap from "../../../components/layout/wrap";

// 이거 근데 router로 받아야함.
interface MakerDetailProps extends MakerType {
  tiers: string[]; // boards
  data: string[];
}

export default function MakerDetail() {
  const route = useRouter();
  console.log(route.query);

  useEffect(() => {
    const drag = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      target.classList.add("dragging");
    };
    const move = (e: DragEvent) => {};
    const end = (e: DragEvent) => {};

    document.querySelectorAll(".draggable").forEach((el) => {
      const draggable = el as HTMLElement;
      draggable.addEventListener("dragstart", drag);
    });

    return () => {
      document.querySelectorAll(".draggable").forEach((el) => {
        const draggable = el as HTMLElement;
        draggable.removeEventListener("dragstart", drag);
      });
    };
  }, []);

  return (
    <Wrap>
      <div.user>
        <div>{route.query.title}</div>
        <div>{route.query.description}</div>
        <div>{route.query.uuid}</div>
        <div>{route.query.userImage}</div>
        <div>{route.query.userNick}</div>
      </div.user>

      <div.drop>
        <div className="dropzone">drop1</div>
      </div.drop>

      <div.drag>
        <div className="draggable" draggable>
          item1
        </div>
        <div className="draggable" draggable>
          item2
        </div>
      </div.drag>
    </Wrap>
  );
}

const div = {
  user: styled.div``,
  drop: styled.div`
    .dropzone {
      border: 1px dashed red;
      height: 100px;
    }
  `,
  drag: styled.div`
    .draggable {
      width: 50px;
      height: 50px;
      border: 1px dashed blue;
      cursor: pointer;
    }
    .dragging {
      opacity: 0.5;
    }
  `,
};
