import { useMutation, useQuery } from "@tanstack/react-query";
import { collectionServices } from "../services";
import { AxiosError, AxiosResponse } from "axios";

export const useGetCollections = () => {
  return useQuery<AxiosResponse<{ result: string }>, AxiosError, string>(
    ["collections"],
    {
      queryFn: async () => collectionServices.getCollections(),
      select(data) {
        const result = data.data.result;
        return result;
      },
    }
  );
};

export const useGetCollectionByName = (
  collectionName: string,
  offset: number
) => {
  return useQuery<AxiosResponse<{ result: string }>, AxiosError, string>(
    ["collections", collectionName, offset],
    {
      queryFn: async () =>
        collectionServices.getCollectionsByName(collectionName, offset),
      select(data) {
        const result = data.data.result;
        return result;
      },
    }
  );
};

export const useDeleteCollections = () => {
  return useMutation<AxiosResponse<{ result: string }>, AxiosError, string>(
    ["deleteCollections"],
    {
      mutationFn: async (collectionName: string) =>
        collectionServices.deleteCollections(collectionName),
      onSuccess(data) {
        const result = data.data.result;
        return result;
      },
    }
  );
};
