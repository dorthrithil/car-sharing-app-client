/**
 * A description of an error.
 */
interface ErrorDescription {
  message: string;
  title: string;
  description: string;
  silent: boolean; // Set to true if no notification should be shown for this error
}

/**
 * A dictionary of error descriptions.
 */
interface ErrorDictionary {
  [index: string]: ErrorDescription;
}


/**
 * A dictionary with translations for known server error messages.
 */
export const knownErrors: ErrorDictionary = {
  USER_ALREADY_EXISTS: {
    message: 'USER_ALREADY_EXISTS',
    title: 'Nutzername bereits vergeben',
    description: 'Dieser Nutzername wird im System bereits verwendet.',
    silent: false
  },
  USER_DOESNT_EXIST: {
    message: 'USER_DOESNT_EXIST',
    title: 'Ungültige Kombination',
    description: 'Die Kombination von Nutzername und Passwort existiert nicht.',
    silent: false
  },
  USER_NOT_FOUND: {
    message: 'USER_NOT_FOUND',
    title: 'Nutzer nicht gefunden',
    description: 'Es konnte kein Nutzer für die angegebenen Daten gefunden werden.',
    silent: false
  },
  WRONG_CREDENTIALS: {
    message: 'WRONG_CREDENTIALS',
    title: 'Ungültige Kombination',
    description: 'Die Kombination von Nutzername und Passwort existiert nicht.',
    silent: false
  },
  USERNAME_TOO_SHORT: {
    message: 'USERNAME_TOO_SHORT',
    title: 'Nutzername zu kurz',
    description: 'Der Nutzername muss mindestens 3 Zeichen haben.',
    silent: false
  },
  PASSWORD_TOO_SHORT: {
    message: 'PASSWORD_TOO_SHORT',
    title: 'Passwort zu kurz',
    description: 'Das Passwort muss mindestens 8 Zeichen haben.',
    silent: false
  },
  USERNAME_INVALID: {
    message: 'USERNAME_INVALID',
    title: 'Nutzername ungültig',
    description: 'Erlaube Zeichen: a-z, A-Z, 0-9.',
    silent: false
  },
  UNAUTHORIZED: {
    message: 'UNAUTHORIZED',
    title: 'Nicht autorisiert',
    description: 'Eventuell ist dein Login nicht mehr gültig. Bitte logge dich neu ein.',
    silent: false
  },
  CANT_START_TOUR_WHEN_HAVING_UNFINISHED_TOURS_IN_COMMUNITY: {
    message: 'CANT_START_TOUR_WHEN_HAVING_UNFINISHED_TOURS_IN_COMMUNITY',
    title: 'Nicht möglich',
    description: 'Eine neue Fahrt kann erst begonnen werden, wenn die vorherige abgeschlossen ist.',
    silent: false
  },
  COMMUNIY_DOESNT_EXIST: {
    message: 'COMMUNIY_DOESNT_EXIST',
    title: 'Gruppe existiert nicht',
    description: 'Die angegebene Gruppe existiert nicht im System.',
    silent: false
  },
  CANT_CREATE_PAYOFF_WITHOUT_NEW_REFUELS_AND_TOURS: {
    message: 'CANT_CREATE_PAYOFF_WITHOUT_NEW_REFUELS_AND_TOURS',
    title: 'Abrechnung nicht möglich',
    description: 'Eine Abrechnung ohne neue Fahrten und Tankfüllungen ist nicht möglich.',
    silent: false
  },
  CANT_CREATE_PAYOFF_WHEN_UNFINISHED_TOURS_EXIST: {
    message: 'CANT_CREATE_PAYOFF_WHEN_UNFINISHED_TOURS_EXIST',
    title: 'Abrechnung nicht möglich',
    description: 'Bitte beende alle Fahrten bevor du eine Abrechnung erstellst.',
    silent: false
  },
  OLD_PASSWORD_INCORRECT: {
    message: 'OLD_PASSWORD_INCORRECT',
    title: 'Altes Passwort falsch',
    description: 'Das alte Passwort ist nicht korrekt.',
    silent: false
  },
  RESET_PASSWORD_HASH_INVALID: {
    message: 'RESET_PASSWORD_HASH_INVALID',
    title: 'Link abgelaufen',
    description: 'Der Link zum Zurücksetzen des Passworts ist ungültig oder abgelaufen.',
    silent: false
  },
  EMAIL_INVALID: {
    message: 'EMAIL_INVALID',
    title: 'Ungültige E-Mail Adresse',
    description: 'Die verwendete E-Mail Adresse ist nicht gültig.',
    silent: false
  },
  TASK_DOESNT_EXIST: {
    message: 'TASK_DOESNT_EXIST',
    title: 'Aufgabe nicht gefunden',
    description: 'Die angeforderte Aufgabe wurde nicht gefunden.',
    silent: false
  },
  TASK_MUST_BE_EITHER_TIME_OR_KM_TRIGGERED: {
    message: 'TASK_MUST_BE_EITHER_TIME_OR_KM_TRIGGERED',
    title: 'Aufgaben Auslöser fehlerhaft',
    description: 'Eine Aufgabe muss entweder Zeit- oder Kilometerstand gesteuert sein.',
    silent: false
  },
  TASK_KM_NEXT_INSTANCE_MUST_BE_HIGHER_THEN_CURRENT_KM: {
    message: 'TASK_KM_NEXT_INSTANCE_MUST_BE_HIGHER_THEN_CURRENT_KM',
    title: 'Aufgaben Auslöser fehlerhaft',
    description: 'Eine Kilometerstand gesteuerte Aufgabe benötigt einen Startkilometerstand welcher höher als der aktuelle' +
      ' Kilometerstand ist.',
    silent: false
  },
  TASK_TIME_NEXT_INSTANCE_MUST_BE_HIGHER_THEN_CURRENT_TIME: {
    message: 'TASK_TIME_NEXT_INSTANCE_MUST_BE_HIGHER_THEN_CURRENT_TIME',
    title: 'Aufgaben Auslöser fehlerhaft',
    description: 'Eine Zeit gesteuerte Aufgabe kann nicht in der Vergangenheit starten.',
    silent: false
  },
  NO_GEOCODING_RESULTS: {
    message: 'NO_GEOCODING_RESULTS',
    title: 'Keine Suchergebnisse',
    description: 'Für die Suchanfrage wurde keine passende Adresse gefunden.',
    silent: false
  },
  END_MUST_BE_AFTER_START: {
    message: 'END_MUST_BE_AFTER_START',
    title: 'Termin Ende muss nach Termin Anfang sein',
    description: 'Der Endzeitpunkt eines Termins darf nicht vor dem Anfangszeitpunkt liegen.',
    silent: false
  },
  EVENT_DOESNT_EXIST: {
    message: 'EVENT_DOESNT_EXIST',
    title: 'Termin nicht gefunden',
    description: 'Der angeforderte Termin wurde nicht gefunden.',
    silent: false
  },
  TO_MUST_BE_AFTER_FROM: {
    message: 'TO_MUST_BE_AFTER_FROM',
    title: 'Falscher Suchzeitraum',
    description: 'Der Suchzeitraum wurde nicht richtig konfiguriert. "Bis" muss nach "Von" liegen.',
    silent: false
  },
  NO_FAVOURITE_COMMUNITY_FOUND: {
    message: 'NO_FAVOURITE_COMMUNITY_FOUND',
    title: 'Keine Gruppe als Favorit markiert',
    description: 'Du hast noch keine Gruppe als Favorit markiert.',
    silent: true
  }
};
