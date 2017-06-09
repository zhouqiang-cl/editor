// @flow
import {
  DISPLAY_MODE_EDIT,
  DISPLAY_MODE_LAYOUT,
  DISPLAY_MODE_PREVIEW,
  DISPLAY_MODE_INSERT,
  DISPLAY_MODE_RESIZING,
  DISPLAY_MODE_SAVE
} from '../../actions/display'

import type { Display } from '../../types/display'

export const isPreviewMode = ({
  display: { mode }
}: {
  display: Display
}): boolean => mode === DISPLAY_MODE_PREVIEW
export const isSaveMode = ({
  display: { mode }
}: {
  display: Display
}): boolean => mode === DISPLAY_MODE_SAVE
export const isLayoutMode = ({
  display: { mode }
}: {
  display: Display
}): boolean => mode === DISPLAY_MODE_LAYOUT
export const isEditMode = ({
  display: { mode }
}: {
  display: Display
}): boolean => mode === DISPLAY_MODE_EDIT
export const isInsertMode = ({
  display: { mode }
}: {
  display: Display
}): boolean => mode === DISPLAY_MODE_INSERT
export const isResizeMode = ({
  display: { mode }
}: {
  display: Display
}): boolean => mode === DISPLAY_MODE_RESIZING
