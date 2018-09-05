import { Injectable } from '@angular/core';
import { CONSTANTS } from '../../app/core/constants';

@Injectable()
export class InformationService {

  private data: any;

  constructor() {
    this.data = null;
  }

  getUserData() {
    this.data = {
      user: JSON.parse(localStorage.getItem('user'))
    };
  }

  setAttributeToData(name, value) {
    value = JSON.stringify(value);
    if (this.data === null) {
      this.data = {};
    }
    this.data[name] = value;
    localStorage.setItem(name, value);
  }

  getAttributeFromJsonData(name) {
    let result = null;
    if (this.data !== null) {
      result = this.data[name];
    }

    if (result === undefined || result === null) {
      result = this.getAttributeFromLocalStorage(name);
    }
    result = result === undefined ? null : JSON.parse(result);
    return result;
  }

  getAttributeFromLocalStorage(name) {
    if (this.data === null) {
      this.data = {};
    }
    const value = localStorage.getItem(name);
    this.data[name] = value;
    return value;
  }

  getData() {
    return this.data;
  }

  removeData() {
    localStorage.clear();
    this.data = null;
  }

  setAttributesToData(value) {
    localStorage.setItem(CONSTANTS.STORAGE.USER_NAME, value.name);
    localStorage.setItem(CONSTANTS.STORAGE.USER_LASTNAME, value.lastName);
    localStorage.setItem(CONSTANTS.STORAGE.USER_COMPANY_VISIBILITY, value.companyVisibility);
    localStorage.setItem(CONSTANTS.STORAGE.USER_BRANCH_VISIBILITY, value.branchVisibility);
    localStorage.setItem(CONSTANTS.STORAGE.LOGGED_USER, JSON.stringify(value));
    localStorage.setItem(CONSTANTS.STORAGE.BASE_GROUP_ID, value.groupId);
    localStorage.setItem(CONSTANTS.STORAGE.TOKEN, value.token);
  }
}
