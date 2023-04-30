/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

type TypeOfNotification = 'success' | 'warning' | 'alert';
type HorizontalPosition = 'center' | 'end' | 'left' | 'right' | 'start';

export interface IToastInterface {
  typeOfNotification: TypeOfNotification;
  message: string;
  horizontalPosition?: HorizontalPosition
}
