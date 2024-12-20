import {
  createNavigationTab,
  getIsActiveTab,
  getMissingInputLanguageString,
  mapLanguageKeyToLanguageText,
  deepCompare,
  getEnvLabel,
  mapKeywordStringToKeywordTypeArray,
  validateResource,
} from './';
import type { EnvId } from './resourceUtils';
import type { LeftNavigationTab } from '../../components/LeftNavigationBar';
import { TestFlaskIcon } from '@studio/icons';
import React from 'react';
import type { Resource, SupportedLanguage } from 'app-shared/types/ResourceAdm';

describe('mapKeywordStringToKeywordTypeArray', () => {
  it('should split keywords correctly', () => {
    const keywords = mapKeywordStringToKeywordTypeArray('test,,,,comma, hei,meh,');
    expect(keywords).toStrictEqual([
      { word: 'test', language: 'nb' },
      { word: 'comma', language: 'nb' },
      { word: 'hei', language: 'nb' },
      { word: 'meh', language: 'nb' },
    ]);
  });
});

describe('mapLanguageKeyToLanguageText', () => {
  it('to return Bokmål for nb', () => {
    const translationFunctionMock = (key: string) => {
      if (key === 'language.nb') return 'Bokmål';
      if (key === 'language.nn') return 'Nynorsk';
      if (key === 'language.en') return 'Engelsk';
      return key;
    };

    const result = mapLanguageKeyToLanguageText('nb', translationFunctionMock);
    expect(result).toEqual('Bokmål');
  });
});

describe('getMissingInputLanguageString', () => {
  it('to map a language with no empty fields to correct string', () => {
    const translationFunctionMock = (key: string) => {
      return key;
    };

    const languageStringMock: SupportedLanguage = {
      nb: 'Test tekst',
      nn: 'Test',
      en: 'Test',
    };

    const result = getMissingInputLanguageString(
      languageStringMock,
      'test',
      translationFunctionMock,
    );
    expect(result).toEqual('');
  });

  it('to map a language with 1 non-empty field to correct string', () => {
    const translationFunctionMock = (key: string) => {
      if (key === 'resourceadm.about_resource_language_error_missing_1')
        return 'Du mangler oversettelse for test på Engelsk.';
      return key;
    };

    const languageStringMock: SupportedLanguage = {
      nb: 'Test tekst',
      nn: 'Test',
      en: '',
    };
    const missingInputLanguageStringTestMock: string =
      'Du mangler oversettelse for test på Engelsk.';

    const result = getMissingInputLanguageString(
      languageStringMock,
      'test',
      translationFunctionMock,
    );
    expect(result).toEqual(missingInputLanguageStringTestMock);
  });

  it('to map a language with 2 non-empty fields to correct string', () => {
    const translationFunctionMock = (key: string) => {
      if (key === 'resourceadm.about_resource_language_error_missing_2')
        return 'Du mangler oversettelse for test på Nynorsk og Engelsk.';
      return key;
    };

    const languageStringMock: SupportedLanguage = {
      nb: 'Test tekst',
      nn: '',
      en: '',
    };
    const missingInputLanguageStringTestMock: string =
      'Du mangler oversettelse for test på Nynorsk og Engelsk.';

    const result = getMissingInputLanguageString(
      languageStringMock,
      'test',
      translationFunctionMock,
    );
    expect(result).toEqual(missingInputLanguageStringTestMock);
  });
});

describe('getIsActiveTab', () => {
  it('returns true when current page and tab id mathces', () => {
    const isActive = getIsActiveTab('about', 'about');
    expect(isActive).toBeTruthy();
  });

  it('returns false when current page and tab id does not match', () => {
    const isActive = getIsActiveTab('about', 'policy');
    expect(isActive).toBeFalsy();
  });
});

describe('createNavigationTab', () => {
  const mockOnClick = jest.fn();

  const mockTo: string = '/about';

  const mockTab: LeftNavigationTab = {
    icon: <TestFlaskIcon />,
    tabName: 'resourceadm.left_nav_bar_about',
    tabId: 'about',
    action: {
      type: 'link',
      onClick: mockOnClick,
      to: mockTo,
    },
    isActiveTab: true,
  };

  it('creates a new tab when the function is called', () => {
    const newTab = createNavigationTab(<TestFlaskIcon />, 'about', mockOnClick, 'about', mockTo);

    expect(newTab).toEqual(mockTab);
  });
});

describe('deepCompare', () => {
  it('should return true for equal objects', () => {
    const obj1 = {
      array: [
        { a: 1, b: 2 },
        { a: 11, b: 22 },
      ],
      text: 'text',
      subObj: {
        prop: null,
        other: 'other',
      },
    };
    const obj2 = {
      subObj: {
        other: 'other',
        prop: null,
      },
      text: 'text',
      array: [
        { b: 2, a: 1 },
        { b: 22, a: 11 },
      ],
    };
    const areEqual = deepCompare(obj1, obj2);
    expect(areEqual).toBeTruthy();
  });

  it('should return true for null objects', () => {
    const areEqual = deepCompare(null, null);
    expect(areEqual).toBeTruthy();
  });

  it('should return false when one object is null', () => {
    const areEqual = deepCompare(null, {});
    expect(areEqual).toBeFalsy();
  });

  it('should return false when objects are not equal', () => {
    const areEqual = deepCompare({ a: 1 }, {});
    expect(areEqual).toBeFalsy();
  });

  it('should return false when objects are not equal', () => {
    const areEqual = deepCompare({ a: 1 }, {});
    expect(areEqual).toBeFalsy();
  });

  it('should return false when comparing empty object with empty array', () => {
    const areEqual = deepCompare([], {});
    expect(areEqual).toBeFalsy();
  });

  describe('getEnvLabel', () => {
    it('should return label for selected environment when environment exists', () => {
      const envLabel = getEnvLabel('tt02');
      expect(envLabel).toEqual('resourceadm.deploy_test_env');
    });

    it('should return empty label for selected environment when environment with given id does not exist', () => {
      const envLabel = getEnvLabel('mu01' as EnvId);
      expect(envLabel).toEqual('');
    });
  });

  describe('validateResource', () => {
    it('should return all possible errors for maskinportenSchema', () => {
      const resource: Resource = {
        identifier: 'res',
        resourceType: 'MaskinportenSchema',
        title: null,
        description: null,
        delegable: true,
        rightDescription: null,
        resourceReferences: [{ reference: 'hei', referenceSource: 'Default', referenceType: null }],
        status: null,
        availableForType: null,
        contactPoints: [{ category: '', contactPage: '', email: '', telephone: '' }],
      };
      const validationErrors = validateResource(resource, () => 'test');
      expect(validationErrors.length).toBe(13);
    });

    it('should return all possible errors for genericAccessResource', () => {
      const resource: Resource = {
        identifier: 'res',
        resourceType: null,
        title: null,
        description: null,
        delegable: true,
        rightDescription: null,
        status: null,
        availableForType: null,
        contactPoints: null,
      };
      const validationErrors = validateResource(resource, () => 'test');
      expect(validationErrors.length).toBe(13);
    });

    it('should show empty errors for contactPoints and resourceReferences', () => {
      const resource: Resource = {
        identifier: 'res',
        resourceType: 'MaskinportenSchema',
        title: null,
        description: null,
        delegable: true,
        rightDescription: null,
        resourceReferences: [],
        status: null,
        availableForType: null,
        contactPoints: [],
      };
      const validationErrors = validateResource(resource, () => 'test');
      expect(validationErrors.length).toBe(13);
    });
  });
});
