class Singleton {
  public:
    static Singleton* Instance();
    static void Register(const char* name, Singleton*);
  protected:
    static Singleton* Lookup(const char* name);
  private:
    static Singleton* _instance;
    static List<NameSingletonPair>* _registry;
};
