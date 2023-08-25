export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      app_users: {
        Row: {
          acces_level: string | null
          created_at: string | null
          email: string | null
          id: string
          location: string | null
          phone_number: number | null
          user_name: string | null
        }
        Insert: {
          acces_level?: string | null
          created_at?: string | null
          email?: string | null
          id: string
          location?: string | null
          phone_number?: number | null
          user_name?: string | null
        }
        Update: {
          acces_level?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          location?: string | null
          phone_number?: number | null
          user_name?: string | null
        }
        Relationships: []
      }
      estate: {
        Row: {
          adress: string | null
          avibility: boolean
          contract_end_date: string | null
          contract_start_data: string | null
          created_at: string | null
          door_code: string | null
          electricity_amount: number | null
          electricity_deadline: string | null
          id: string
          keeper_name: string | null
          keeper_phone_number: number | null
          market_price: number | null
          name: string | null
          owner_name: string | null
          owner_phone_number: number | null
          pictures: string[] | null
          rent_amount: number | null
          rent_deadline: string | null
          revanue: number | null
          tax_amount: number | null
          tax_deadline: string | null
        }
        Insert: {
          adress?: string | null
          avibility?: boolean
          contract_end_date?: string | null
          contract_start_data?: string | null
          created_at?: string | null
          door_code?: string | null
          electricity_amount?: number | null
          electricity_deadline?: string | null
          id?: string
          keeper_name?: string | null
          keeper_phone_number?: number | null
          market_price?: number | null
          name?: string | null
          owner_name?: string | null
          owner_phone_number?: number | null
          pictures?: string[] | null
          rent_amount?: number | null
          rent_deadline?: string | null
          revanue?: number | null
          tax_amount?: number | null
          tax_deadline?: string | null
        }
        Update: {
          adress?: string | null
          avibility?: boolean
          contract_end_date?: string | null
          contract_start_data?: string | null
          created_at?: string | null
          door_code?: string | null
          electricity_amount?: number | null
          electricity_deadline?: string | null
          id?: string
          keeper_name?: string | null
          keeper_phone_number?: number | null
          market_price?: number | null
          name?: string | null
          owner_name?: string | null
          owner_phone_number?: number | null
          pictures?: string[] | null
          rent_amount?: number | null
          rent_deadline?: string | null
          revanue?: number | null
          tax_amount?: number | null
          tax_deadline?: string | null
        }
        Relationships: []
      }
      failures: {
        Row: {
          created_at: string | null
          estate_id: string
          failue_estate_name: string
          failure_description: string
          failure_title: string
          id: string
          status: boolean
        }
        Insert: {
          created_at?: string | null
          estate_id: string
          failue_estate_name?: string
          failure_description?: string
          failure_title?: string
          id?: string
          status: boolean
        }
        Update: {
          created_at?: string | null
          estate_id?: string
          failue_estate_name?: string
          failure_description?: string
          failure_title?: string
          id?: string
          status?: boolean
        }
        Relationships: []
      }
      owners: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          phone_number: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          phone_number?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          phone_number?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
