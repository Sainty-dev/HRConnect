export interface Skill {
  skill: string;
  yearExp: number;
  seniorityRating: string;
}

export interface Props {
  item: Skill;
  index: number;
  updateSkill: (index: number, field: keyof Skill, value: any) => void;
  deleteSkill: (index: number) => void;
  editableEmployee: any;
  setEditableEmployee: any;
}
