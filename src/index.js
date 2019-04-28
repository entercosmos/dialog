import React from 'react'
import {css} from 'emotion'

export const DialogAction = ({primary, danger, onClick, children}) => (
    <button
        onClick={onClick}
        className={css`
            -moz-user-select: none;
            -ms-flex: 1 1;
            -ms-user-select: none;
            -webkit-box-flex: 1;
            -webkit-user-select: none;
            background: #fff;
            border: 0;
            flex: 1 1;
            font-weight: 700;
            line-height: 50px;
            padding: 0 10px;
            user-select: none;
            white-space: nowrap;
            cursor: pointer;
            text-align: center;
            font-size: 16px;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            &:nth-child(2) {
                border-bottom-left-radius: 0;
                border-left: 1px solid #d9d9d9;
            }
            &:focus {
                outline: none;
            }
            &:hover {
                background-color: #f9f9f9;
            }
            ${primary ? 'color: #07f;' : ''}
            ${danger ? 'color: #f82b60;' : ''}
        `}
    >
      {children}
    </button>
)

export const DialogHeading = ({children}) => (
    <div
        className={css`
            font-size: 19px;
            font-weight: 700;
            padding: 32px 32px 0 32px;
        `}
    >
      {children}
    </div>
)

export const DialogBody = ({children}) => (
    <div
        className={css`
            padding: 32px;
        `}
    >
      {children}
    </div>
)

export const DialogActions = ({children}) => (

    <div
        className={css`
            border-top: 1px solid #d9d9d9;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
        `}
    >
      {children}
    </div>
)

export const Dialog = ({children}) => (
    <div
        className={css`
            background: #fff;
            border-radius: 6px;
            max-width: 360px;
            margin: 0 auto;
            border: 1px solid #d9d9d9;
        `}
    >
      {children}
    </div>
)