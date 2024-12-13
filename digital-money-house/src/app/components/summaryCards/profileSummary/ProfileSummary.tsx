"use client";
import React, { useState } from "react";
import styles from "./profileSummary.module.css";
import {
  UserDetails,
  userDetailsKeyTranslation,
  userDetailsKeyTypes,
} from "../../../types/user.types";
import { Input } from "../../form/input/Input";
import EditIcon from "../../../assets/icons/edit";
import CheckIcon from "../../../assets/icons/check";

type ProfileSummaryProps = {
  details: UserDetails;
};

export const ProfileSummary = ({ details }: ProfileSummaryProps) => {
  const [editMode, setEditMode] = useState(true);
  return (
    <div className={`white-bg ${styles.profileSummaryWrapper}`}>
      <h2 className={`heading-2`}>Tus datos</h2>
      <ul>
        {Object.entries(details).map(([key, value], index) => {
          return (
            <li key={index} className={styles.listItem}>
              <label htmlFor="">
                {
                  userDetailsKeyTranslation[
                    key as keyof typeof userDetailsKeyTranslation
                  ]
                }
              </label>

              <div className={`text-large ${styles.inputWrapper}`}>
                {key.toLocaleLowerCase() === "email" ? (
                  <Input
                    type="email"
                    placeholder={String(value)}
                    disabled={true}
                    className="w-full"
                  />
                ) : (
                  <>
                    <Input
                      type={
                        userDetailsKeyTypes[
                          key as keyof typeof userDetailsKeyTypes
                        ]
                      }
                      placeholder={String(value)}
                      value={value}
                      disabled={editMode}
                      className="w-full"
                    />
                    <button
                      aria-label={editMode ? "Edit" : "Save"}
                      onClick={() => setEditMode(!editMode)}
                      className={styles.editButton}
                    >
                      {editMode ? <EditIcon /> : <CheckIcon />}
                    </button>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
