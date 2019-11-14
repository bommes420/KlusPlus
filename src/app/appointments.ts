import {Appointment} from './Appointment';

export const appointments: Appointment[] = [
  {
    id: 1,
    title: 'Test1',
    description: 'Verwarming kapot, al 3 maanden geen verwarming meer, constant koud etc.',
    status: 'In behandeling'
  },
  {
    id: 2,
    title: 'Test2',
    description: '[BESCHRIJVING KLACHT/PROBLEEM]',
    status: 'Open'
  },
  {
    id: 3,
    title: 'Test3',
    description: '[BESCHRIJVING KLACHT/PROBLEEM]',
    status: 'Afgehandeld'
  },
];

export const closedappointments: Appointment[] = [
  {
    id: 1,
    title: 'Test4',
    description: 'Kraan lekt, wateroverlast als gevolg.',
    status: 'In behandeling'
  },
  {
    id: 2,
    title: 'Test5',
    description: '[BESCHRIJVING KLACHT/PROBLEEM]',
    status: 'In behandeling'
  },
  {
    id: 3,
    title: 'Test6',
    description: '[BESCHRIJVING KLACHT/PROBLEEM]',
    status: 'In behandeling'
  },
  ];
