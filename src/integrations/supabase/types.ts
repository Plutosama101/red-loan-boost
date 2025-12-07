export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      loan_applications: {
        Row: {
          account_number: string
          address: string
          bank_name: string
          business_name: string | null
          bvn: string
          cac_number: string | null
          created_at: string
          date_of_birth: string | null
          email: string
          employer_address: string | null
          employer_name: string | null
          employment_status: string | null
          full_name: string
          guarantor_address: string | null
          guarantor_name: string | null
          guarantor_phone: string | null
          guarantor_relationship: string | null
          id: string
          lga: string | null
          loan_amount: number
          loan_purpose: string
          loan_type: Database["public"]["Enums"]["loan_type"]
          monthly_income: number | null
          notes: string | null
          passport_number: string | null
          phone_number: string
          repayment_period: number
          state: string
          status: Database["public"]["Enums"]["application_status"]
          travel_date: string | null
          travel_destination: string | null
          updated_at: string
        }
        Insert: {
          account_number: string
          address: string
          bank_name: string
          business_name?: string | null
          bvn: string
          cac_number?: string | null
          created_at?: string
          date_of_birth?: string | null
          email: string
          employer_address?: string | null
          employer_name?: string | null
          employment_status?: string | null
          full_name: string
          guarantor_address?: string | null
          guarantor_name?: string | null
          guarantor_phone?: string | null
          guarantor_relationship?: string | null
          id?: string
          lga?: string | null
          loan_amount: number
          loan_purpose: string
          loan_type: Database["public"]["Enums"]["loan_type"]
          monthly_income?: number | null
          notes?: string | null
          passport_number?: string | null
          phone_number: string
          repayment_period: number
          state: string
          status?: Database["public"]["Enums"]["application_status"]
          travel_date?: string | null
          travel_destination?: string | null
          updated_at?: string
        }
        Update: {
          account_number?: string
          address?: string
          bank_name?: string
          business_name?: string | null
          bvn?: string
          cac_number?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string
          employer_address?: string | null
          employer_name?: string | null
          employment_status?: string | null
          full_name?: string
          guarantor_address?: string | null
          guarantor_name?: string | null
          guarantor_phone?: string | null
          guarantor_relationship?: string | null
          id?: string
          lga?: string | null
          loan_amount?: number
          loan_purpose?: string
          loan_type?: Database["public"]["Enums"]["loan_type"]
          monthly_income?: number | null
          notes?: string | null
          passport_number?: string | null
          phone_number?: string
          repayment_period?: number
          state?: string
          status?: Database["public"]["Enums"]["application_status"]
          travel_date?: string | null
          travel_destination?: string | null
          updated_at?: string
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
      application_status: "pending" | "under_review" | "approved" | "rejected"
      loan_type: "local_government" | "sme" | "individual" | "proof_of_funds"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: ["pending", "under_review", "approved", "rejected"],
      loan_type: ["local_government", "sme", "individual", "proof_of_funds"],
    },
  },
} as const
