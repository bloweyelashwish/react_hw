class LocalStorageService {
  constructor() {
    if (LocalStorageService.instance) {
      return this;
    }
    this.instance = this;
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  getItem(key) {
    return localStorage.getItem(key);
  }
}

export const localStorageService = new LocalStorageService();
