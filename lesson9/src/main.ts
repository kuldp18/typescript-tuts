// Utility types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: 'compsci123',
  title: 'final project',
  grade: 0,
};

// console.log(updateAssignment(assign1, { grade: 69 }));

const assignGraded: Assignment = updateAssignment(assign1, {
  grade: 95,
});

console.log(assignGraded);

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to db etc
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

//assignVerified.grade = 88; // not possible since its readonly

recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
};

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
  Sara: 'B',
  Kelly: 'D',
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 89, assign2: 90 },
  Kelly: { assign1: 59, assign2: 57 },
};

// Pick and Omit => works on interfaces

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
  studentId: 'k123',
  grade: 87,
};

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
  studentId: 'k123',
  title: 'proj',
};

// Exclude and Extract => works on string literals

type adjustedGrade = Exclude<LetterGrades, 'U'>;

type highGrades = Extract<LetterGrades, 'A' | 'B'>;

// Nonnullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign('Utility types', 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['Generics', 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });

  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
