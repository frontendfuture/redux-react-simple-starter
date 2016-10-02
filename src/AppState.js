import { observable } from 'mobx'


class AppState{
  @observable user = null;
}

export default new AppState();
