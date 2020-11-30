export interface RootState {
  version: string;
}

export interface BasicCounterPlayer {
  id: string;
  name: string;
  score: number;
}

export interface BasicCounterState {
  players: Array<BasicCounterPlayer>;
}
