"use client";

import React, { useState } from "react";

interface ChecklistItem {
  id: string;
  text: string;
  points: number;
  unit: string;
  targets: { name: string; checked: boolean }[];
}

const CheckAdm: React.FC = () => {
  const [checklists, setChecklists] = useState<ChecklistItem[]>([
    {
      id: "1",
      text: "숙제하기",
      points: 10,
      unit: "점",
      targets: [
        { name: "온겸", checked: false },
        { name: "소빈", checked: false },
      ],
    },
    {
      id: "2",
      text: "책 읽기",
      points: 20,
      unit: "점",
      targets: [
        { name: "온겸", checked: false },
        { name: "소빈", checked: false },
      ],
    },
  ]);

  const [newChecklistText, setNewChecklistText] = useState("");
  const [newChecklistPoints, setNewChecklistPoints] = useState<number>(0);
  const [newChecklistUnit, setNewChecklistUnit] = useState<string>("점");

  // 체크 상태 변경
  const handleToggleTargetCheck = (
    checklistId: string,
    targetName: string
  ): void => {
    setChecklists((prev) =>
      prev.map((item) =>
        item.id === checklistId
          ? {
              ...item,
              targets: item.targets.map((target) =>
                target.name === targetName
                  ? { ...target, checked: !target.checked }
                  : target
              ),
            }
          : item
      )
    );
  };

  // 포인트 수정
  const handleUpdatePoints = (checklistId: string, points: string): void => {
    setChecklists((prev) =>
      prev.map((item) =>
        item.id === checklistId
          ? { ...item, points: points === "" ? 0 : parseInt(points) }
          : item
      )
    );
  };

  // 단위 변경
  const handleUpdateUnit = (checklistId: string, unit: string): void => {
    setChecklists((prev) =>
      prev.map((item) =>
        item.id === checklistId ? { ...item, unit } : item
      )
    );
  };

  // 새로운 체크리스트 추가
  const handleAddChecklist = (): void => {
    if (newChecklistText.trim() === "") return;
    const newChecklist: ChecklistItem = {
      id: Date.now().toString(),
      text: newChecklistText,
      points: newChecklistPoints,
      unit: newChecklistUnit,
      targets: [
        { name: "온겸", checked: false },
        { name: "소빈", checked: false },
      ],
    };
    setChecklists((prev) => [...prev, newChecklist]);
    setNewChecklistText("");
    setNewChecklistPoints(0);
    setNewChecklistUnit("점");
  };

  // 체크리스트 삭제
  const handleDeleteChecklist = (id: string): void => {
    setChecklists((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">체크리스트 관리</h1>
        {/* 새로운 체크리스트 추가 */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <label htmlFor="new-checklist" className="sr-only">
              새로운 체크리스트
            </label>
            <input
              id="new-checklist"
              type="text"
              className="w-24 flex-1 border rounded-lg p-2"
              placeholder="새로운 체크리스트 항목"
              value={newChecklistText}
              onChange={(e) => setNewChecklistText(e.target.value)}
            />
            <input
              type="number"
              className="w-12 border rounded-lg p-2"
              placeholder="점수"
              // value={newChecklistPoints}
              value={newChecklistPoints === 0 && newChecklistPoints.toString() === "0" ? "" : newChecklistPoints.toString()}
              onChange={(e) => setNewChecklistPoints(Number(e.target.value))}
            />
            <select
              title='단위선택'
              value={newChecklistUnit}
              onChange={(e) => setNewChecklistUnit(e.target.value)}
              className="border rounded-lg p-2"
            >
              <option value="점">점</option>
              <option value="원">원</option>
            </select>
            <button
              onClick={handleAddChecklist}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              추가
            </button>
          </div>
        </div>

        {/* 체크리스트 항목 */}
        <ul className="space-y-4">
          {checklists.map((checklist) => (
            <li key={checklist.id} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold">{checklist.text}</span>
                  <input
                    placeholder="포인트"
                    id='input_point'
                    type="number"
                    className="w-12 border rounded-lg p-1"
                    value={checklist.points === 0 && checklist.points.toString() === "0" ? "" : checklist.points.toString()}
                    onChange={(e) =>
                      handleUpdatePoints(checklist.id, e.target.value)
                    }
                  />
                  <label htmlFor='input_point'></label>
                  <select
                    title='포인트단위'
                    value={checklist.unit}
                    onChange={(e) =>
                      handleUpdateUnit(checklist.id, e.target.value)
                    }
                    className="border rounded-lg p-1"
                  >
                    <option value="점">점</option>
                    <option value="원">원</option>
                  </select>
                </div>
                <button
                  onClick={() => handleDeleteChecklist(checklist.id)}
                  className="text-red-500 hover:underline"
                >
                  삭제
                </button>
              </div>
              <div className="mt-4 space-y-2">
                {checklist.targets.map((target) => (
                  <div
                    key={target.name}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      id={`${checklist.id}-${target.name}`}
                      checked={target.checked}
                      onChange={() =>
                        handleToggleTargetCheck(checklist.id, target.name)
                      }
                      className="h-5 w-5"
                    />
                    <label
                      htmlFor={`${checklist.id}-${target.name}`}
                      className="text-gray-700"
                    >
                      {target.name}
                    </label>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckAdm;
